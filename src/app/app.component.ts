import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Page} from "./_interfaces/page";
import {CommonModule, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, NgForOf],
})
export class AppComponent {
  constructor() {}

  pages: Page[] = [
    {
      title: 'Accueil',
      icon: 'home',
      path: '/home',
      tab: 'home'
    },
    {
      title: 'Mes plantes',
      icon: 'list-outline',
      path: '/plant-list',
      tab: 'plant-list'
    }
  ]

}
