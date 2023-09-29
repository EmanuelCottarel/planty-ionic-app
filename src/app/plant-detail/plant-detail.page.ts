import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, ModalController} from '@ionic/angular';
import {Plant} from "../_interfaces/plant";
import {RouterLink} from "@angular/router";
import {Browser} from "@capacitor/browser";
import {PhotoService} from "../_services/photo.service";
import {AddPlantModalComponent} from "../_modales/add-plant-modal/add-plant-modal.component";
import * as L from 'leaflet';
import {PlantService} from "../_services/plant.service";

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PlantDetailPage implements OnInit {

  constructor(
    private location: Location,
    private photoService: PhotoService,
    private modalController: ModalController,
    private plantService: PlantService
  ) {
  }

  plant!: Plant;
  mainPictureUrl?: string;

@ViewChild('map') map: any;

  ngOnInit() {
    this.plant = this.location.getState() as Plant;
    if (this.plant.plantPhoto.length > 0) {
      this.mainPictureUrl = this.plant.plantPhoto[0].webviewPath
    }
  }

  initMap() {
    this.map = L.map("map").setView([46.227638, 2.213749], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.whenReady(() => {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 1000);
    });

    if (this.plant.coordinates) {
      const marker = L.marker([this.plant.coordinates.latitude, this.plant.coordinates.longitude]).addTo(this.map);
    }


  }

  ngAfterViewInit(){
    this.initMap()
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
      componentProps: {plant: this.plant}
    });
    await modal.present();

    const {data, role} = await modal.onWillDismiss();
    if (role === 'confirm') {
      this.plant = Object.assign({}, data);
      console.log(this.plant)
      this.map.invalidateSize();
      if (this.plant.coordinates) {
        L.marker([this.plant.coordinates?.latitude, this.plant.coordinates?.longitude]).addTo(this.map);
      }
    }
  }

}
