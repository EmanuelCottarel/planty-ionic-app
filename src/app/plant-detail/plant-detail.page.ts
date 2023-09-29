import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, ModalController} from '@ionic/angular';
import {Plant} from "../_interfaces/plant";
import {RouterLink} from "@angular/router";
import {Browser} from "@capacitor/browser";
import {PhotoService} from "../_services/photo.service";
import {AddPlantModalComponent} from "../_modales/add-plant-modal/add-plant-modal.component";

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PlantDetailPage implements OnInit {

  constructor(
    private readonly location: Location,
    private readonly photoService: PhotoService,
    private readonly modalController: ModalController,
  ) {
  }

  plant!: Plant;
  mainPictureUrl?: string;


  ngOnInit() {
    this.plant = this.location.getState() as Plant;
    if (this.plant.plantPhoto.length > 0) {
      this.mainPictureUrl = this.plant.plantPhoto[0].webviewPath
    }

  }

  async openWebsite() {
    if (this.plant.website) {
      await Browser.open({url: this.plant.website})
    }
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery(this.plant);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddPlantModalComponent,
      componentProps: {plant: this.plant, action: 'update'}
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();
    if (role === 'confirm') {

    }
  }

}
