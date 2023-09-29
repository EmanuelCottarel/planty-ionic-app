import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private readonly toastController: ToastController) { }

  /*
  Affiche un toast de succés
   */
  async showSuccesToast(message:string){
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'success'
    });
    await toast.present();
  }

  /*
  Affiche un toast d'échec'
   */
  async showErrorToast(message:string){
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }
}
