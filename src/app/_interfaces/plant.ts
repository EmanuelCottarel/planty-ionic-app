import {PlantPhoto} from "./plantPhoto";

export interface Plant {
  id: number;
  name: string;
  acquiredAt: string;
  position?: string;
  lastWatering: string;
  wateringPeriod: number;
  picturePath?: string;
  species?: string;
  website?: string;
  plantPhoto: PlantPhoto[];

}
