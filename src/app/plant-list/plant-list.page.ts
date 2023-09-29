import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActionSheetController, AlertController, IonicModule, ModalController} from '@ionic/angular';
import {PlantService} from "../_services/plant.service";
import {Plant} from "../_interfaces/plant";
import {Event as NavigationEvent, NavigationEnd, Router, RouterLink} from "@angular/router";
import {AddPlantModalComponent} from "../_modales/add-plant-modal/add-plant-modal.component";
import {DateService} from "../_services/date.service";
import {ToastService} from "../_services/toast.service";


@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.page.html',
  styleUrls: ['./plant-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PlantListPage implements OnInit {

  constructor(
    protected plantService: PlantService,
    private alertController: AlertController,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    protected dateService: DateService,
    private toastService: ToastService,
    private router: Router) {
  }


  plantList!: Plant[]

  ngOnInit() {
    this.plantList = this.plantService.getAll();

    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.plantList = this.plantService.getAll();
          }
        });
  }

  async presentDeleteAlert(plant: Plant) {
    const alert = await this.alertController.create(
      {
        header: 'Supprimer cette plante ?',
        subHeader: `${plant.name}`,
        buttons: [
          {
            text: 'Supprimer',
            handler: () => this.deletePlant(plant.id)
          },
          {
            text: 'Annuler',
            role: 'cancel'
          }
        ]
      }
    )
    return await alert.present();
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

  deletePlant(plantId: number) {
    this.plantService.deletePlant(plantId);
    this.plantList = this.plantService.getAll();
  }

  waterPlant(plant: Plant) {
    const today = new Date();
    plant.lastWatering = this.dateService.formatDateToString(today);

    this.plantService.updatePlant(plant);
    this.toastService.showSuccesToast('La plante a bien été arrosé');
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddPlantModalComponent,
      componentProps: {action: 'create'}
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.plantList = this.plantService.getAll();
    }
  }


}
