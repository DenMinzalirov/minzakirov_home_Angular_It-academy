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

   activation(e) {
     console.log(this.user);
     for (const checkNam of this.user) {
       if (checkNam.name === e.name) {
         checkNam.isActive = true;
       }
     }
   }

    inActivation(e) {
     console.log(this.user);
     for (const checkNam of this.user) {
      if (checkNam.name === e.name) {
        checkNam.isActive = false;
      }
    }
  }

  constructor() { }
}
