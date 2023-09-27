import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Plant} from "../_interfaces/plant";
import {RouterLink} from "@angular/router";
import {Browser} from "@capacitor/browser";

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.page.html',
  styleUrls: ['./plant-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class PlantDetailPage implements OnInit {

  constructor(private readonly location: Location) {
  }

  plant!: Plant;

  ngOnInit() {
    this.plant = this.location.getState() as Plant;
  }

  async openWebsite() {
    if (this.plant.website) {
      await Browser.open({url: this.plant.website})
    }
  }

}
