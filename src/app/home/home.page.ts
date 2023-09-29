import {Component, OnInit} from '@angular/core';
import {ActionSheetController, IonicModule} from '@ionic/angular';
import {UserService} from "../_services/user.service";
import {User} from "../_interfaces/user";
import {NgForOf, NgIf} from "@angular/common";
import {Plant} from "../_interfaces/plant";
import {PlantService} from "../_services/plant.service";
import {DateService} from "../_services/date.service";
import {ToastService} from "../_services/toast.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgForOf, NgIf],
})
export class HomePage implements OnInit {

  currentUser!: User;
  plantToWater!: Plant[];
  nbPlants!: number;
  nbPlantToWater!: number;

  constructor(
    private readonly userService: UserService,
    private readonly plantService: PlantService,
    private readonly dateService: DateService,
    private readonly actionSheetController: ActionSheetController,
    private readonly toastService: ToastService,
  ) {
  }


  async presentActionSheet(plant: Plant) {
    const actionSheet = await this.actionSheetController.create({
      header: plant.name,
      buttons: [
        {
          text: 'Arroser',
          icon: 'water',
          role: 'destructive',
          handler: () => {
            this.waterPlant(plant)
          }
        },
        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel'
        },
      ]
    });
    await actionSheet.present();
  }


  ngOnInit() {
    this.currentUser = this.userService.getUser();
    this.plantToWater = this.plantService.getPlantsToWater();
    this.nbPlants = this.plantService.getUserNumberOfPlant();
    this.nbPlantToWater = this.plantToWater.length;
  }

  /*
  Met à jour la date d'arrosage, enregistrée ensuite par la méthode updatePlant()
   */
  waterPlant(plant: Plant) {
    const today = new Date();
    plant.lastWatering = this.dateService.formatDateToString(today);

    this.plantService.updatePlant(plant);
    this.plantToWater = this.plantService.getPlantsToWater();
    this.nbPlantToWater = this.plantToWater.length;
    this.toastService.showSuccesToast('La plante a bien été arrosé');
  }

}
