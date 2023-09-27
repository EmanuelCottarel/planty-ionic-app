import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.page.html',
  styleUrls: ['./plant-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlantListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
