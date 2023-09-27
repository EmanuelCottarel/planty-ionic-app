import {Injectable} from '@angular/core';
import {User} from "../_interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  mockUser: User = {
    firstName: 'Emanuel',
    lastName: 'Cottarel'
  }

  getUser(): User{
    return this.mockUser;
  }


}
