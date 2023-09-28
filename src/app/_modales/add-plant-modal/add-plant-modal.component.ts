import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {Plant} from "../../_interfaces/plant";
import {PlantService} from "../../_services/plant.service";
import {PhotoService} from "../../_services/photo.service";
import {plantForm} from "../../_forms/plant-form";

@Component({
  selector: 'app-add-plant-modal',
  templateUrl: './add-plant-modal.component.html',
  styleUrls: ['./add-plant-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class AddPlantModalComponent implements OnInit {

  constructor(
    private readonly modalController: ModalController,
    private readonly plantService: PlantService,
    protected photoService: PhotoService) {
  }

  // newPlant!: Plant;

  newPlant: Plant = {
    name: '',
    picturePath: '/assets/img/default-plant.webp',
    wateringPeriod: 0,
    lastWatering: '',
    id: this.plantService.getAll().length,
    acquiredAt: '',
    plantPhoto: [],
  }

  plantForm = plantForm;

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery(this.newPlant);
  }

  handleSubmit() {
    Object.assign(this.newPlant, this.plantForm.getRawValue())
    // console.log(this.newPlant)
    this.plantService.addPlant(this.newPlant);
    return this.modalController.dismiss(null, 'confirm');
  }

  deletePictures() {
    this.photoService.deletePictures()

  }

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

}
