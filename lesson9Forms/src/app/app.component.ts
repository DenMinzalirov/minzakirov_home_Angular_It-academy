import { Component } from '@angular/core';
import {UserData} from './models/user-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  getUser(event: UserData) {
    console.log('app-component get object Form', event);
  }
}
