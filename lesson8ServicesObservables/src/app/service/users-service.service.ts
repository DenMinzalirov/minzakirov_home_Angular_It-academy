import { Injectable } from '@angular/core';
import {CounterServiceService} from './counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private counterService: CounterServiceService) { }

  user = [{
    name: 'Den',
    isActive: false
  },
    {
      name: 'Pavel',
      isActive: false
    },
    {
      name: 'Olga',
      isActive: false
    }];

  activation(e) {
    this.counterService.counter();
    for (const checkNam of this.user) {
      if (checkNam.name === e.name) {
        checkNam.isActive = true;
      }
    }
  }

  inActivation(e) {
    this.counterService.counter();
    for (const checkNam of this.user) {
      if (checkNam.name === e.name) {
        checkNam.isActive = false;
      }
    }
  }
}
