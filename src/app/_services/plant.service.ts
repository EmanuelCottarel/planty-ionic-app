import { Injectable } from '@angular/core';
import {Plant} from "../_interfaces/plant";

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor() { }

  mockPlants: Plant[] = [
    {id: 1, name: 'Bob', lastWatering: '2023-09-10', acquiredAt: '2023-05-01', wateringPeriod: 7},
    {id: 2, name: 'Chloë', lastWatering: '2023-09-26', acquiredAt: '2023-05-01', wateringPeriod: 4},
    {id: 3, name: 'Daphnée', lastWatering: '2023-09-23', acquiredAt: '2023-05-01', wateringPeriod:  5},
    {id: 4, name: 'Ketsia', lastWatering: '2023-09-17', acquiredAt: '2023-05-01', wateringPeriod: 8},
    {id: 5, name: 'Olivier', lastWatering: '2023-09-02', acquiredAt: '2023-05-01', wateringPeriod: 3}
  ]

  getAll(): Plant[]
  {
    return [...this.mockPlants];
  }

  getPlantsToWater(): Plant[]
  {
    return this.getAll().filter((plant)=> {
      const today = new Date;
      const wateringDate = new Date(plant.lastWatering);
      wateringDate.setDate(wateringDate.getDate() + plant.wateringPeriod);

      return wateringDate <= today;
    })
  }

  getUserNumberOfPlant():number {
    return this.mockPlants.length
  }

  updatePlant(plant: Plant){
     const index = this.mockPlants.indexOf(<Plant>this.mockPlants.find((p) => p.id === plant.id))
      this.mockPlants[index] = plant;
  }
}
