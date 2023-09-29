import {Injectable} from '@angular/core';
import {Plant} from "../_interfaces/plant";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private readonly toastService: ToastService) {
  }

  mockPlants: Plant[] = [
    {
      id: 1,
      name: 'Bob',
      lastWatering: '2023-09-10',
      acquiredAt: '2023-05-01',
      wateringPeriod: 7,
      picturePath: '/assets/img/areca.jpg',
      website: 'https://fr.wikipedia.org/wiki/Areca',
      plantPhoto: [],
      species: 'Areca'
    },
    {
      id: 2,
      name: 'Chloë',
      lastWatering: '2023-09-26',
      acquiredAt: '2023-05-01',
      wateringPeriod: 4,
      species: 'Schefflera',
      picturePath: '/assets/img/schefflera.jpg',
      website: 'https://fr.wikipedia.org/wiki/Schefflera',
      plantPhoto: [],
    },
    {
      id: 3,
      name: 'Daphnée',
      lastWatering: '2023-09-23',
      acquiredAt: '2023-05-01',
      wateringPeriod: 5,
      picturePath: '/assets/img/aloe-vera.jpg',
      website: 'https://fr.wikipedia.org/wiki/Aloe_vera',
      plantPhoto: [],
      species: 'Aloe-vera'
    },
    {
      id: 4,
      name: 'Ketsia',
      lastWatering: '2023-09-17',
      acquiredAt: '2023-05-01',
      wateringPeriod: 8,
      picturePath: '/assets/img/monstera.jpg',
      website: 'https://fr.wikipedia.org/wiki/Monstera',
      plantPhoto: [],
      species:'Monstera'
    },
    {
      id: 5,
      name: 'Olivier',
      lastWatering: '2023-09-02',
      acquiredAt: '2023-05-01',
      wateringPeriod: 3,
      picturePath: '/assets/img/solanum.jpg',
      website: 'https://fr.wikipedia.org/wiki/Solanum',
      plantPhoto: [],
      species: 'Solanum'
    }
  ]

  getAll(): Plant[] {
    return [...this.mockPlants];
  }

  addPlant(plant: Plant) {
    this.mockPlants.push(plant);
    this.toastService.showSuccesToast('Plante ajoutée!')
  }

  deletePlant(plantId: number) {
    this.mockPlants = this.mockPlants.filter((plant) => plant.id !== plantId);
    this.toastService.showSuccesToast('Plante supprimée!')
  }

  getWateringDate(plant: Plant) {
    const wateringDate = new Date(plant.lastWatering);
    wateringDate.setDate(wateringDate.getDate() + plant.wateringPeriod);
    return wateringDate;
  }

  getPlantsToWater(): Plant[] {
    return this.getAll().filter((plant) => {
      const today = new Date;
      return this.getWateringDate(plant) <= today;
    })
  }

  getUserNumberOfPlant(): number {
    return this.mockPlants.length
  }

  updatePlant(plant: Plant) {
    const index = this.mockPlants.indexOf(<Plant>this.mockPlants.find((p) => p.id === plant.id))
    this.mockPlants[index] = plant;
  }
}
