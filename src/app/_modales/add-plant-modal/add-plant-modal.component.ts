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
    private modalController: ModalController,
    private plantService: PlantService,
    protected photoService: PhotoService) {
  }

  plant?: Plant;

  newPlant: Plant = {
    name: '',
    picturePath: '/assets/img/default-plant.webp',
    wateringPeriod: 0,
    lastWatering: '',
    id: this.plantService.getAll().length,
    acquiredAt: '',
    plantPhoto: [],
  }

  title: string = "Ajouter une plante";
  action!: string

  plantForm = plantForm;

  ngOnInit() {
    if (this.action=== 'update' && this.plant) {
      console.log('update')
      this.title = "Modifier une plante";
      this.plantForm.patchValue(this.plant)
    }else{
      this.plantForm.reset()
    }
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery(this.newPlant);
  }

  handleSubmit() {
    if (this.plant){
       Object.assign(this.plant, this.plantForm.getRawValue())
      this.plantService.updatePlant(this.plant)
    }else{
      Object.assign(this.newPlant, this.plantForm.getRawValue())
      this.plantService.addPlant(this.newPlant);

    }
    return this.modalController.dismiss(null, 'confirm');
  }

  cancel() {
    return this.modalController.dismiss(null, 'cancel');
  }

}
