import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

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

  str;

  loge(str: string) {
    console.log(this.str);
  }

  constructor() { }
}
