import {FormControl, FormGroup, Validators} from "@angular/forms";

export const plantForm: FormGroup = new FormGroup({
  name: new FormControl('', Validators.required),
  acquiredAt: new FormControl(''),
  lastWatering: new FormControl('', Validators.required),
  wateringPeriod: new FormControl('', Validators.required),
  species: new FormControl(''),
  website: new FormControl('')
})
