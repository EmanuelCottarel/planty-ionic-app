import {PlantPhoto} from "./plantPhoto";
import {Coordinates} from "./coordinates";

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
  coordinates?: Coordinates;

}
