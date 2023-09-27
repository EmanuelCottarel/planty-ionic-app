import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertController, IonicModule} from '@ionic/angular';
import {PlantService} from "../_services/plant.service";
import {Plant} from "../_interfaces/plant";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.page.html',
  styleUrls: ['./plant-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PlantListPage implements OnInit {

  constructor(
    private readonly plantService: PlantService,
    private readonly alertController: AlertController) { }

  plantList!: Plant[]

  ngOnInit() {
    this.plantList = this.plantService.getAll();
  }

   async presentDeleteAlert(plant: Plant) {
    const alert = await this.alertController.create(
      {
        header: 'Supprimer cet étudiant ?',
        subHeader: `${plant.name}`,
        message: 'Cette opération ne pourra etre annulée',
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

  deletePlant(plantId: number){
    console.log(plantId);
  }


}
