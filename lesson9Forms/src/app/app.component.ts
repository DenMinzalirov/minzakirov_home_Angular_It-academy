import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  getUser(event) {
    console.log('app-component get object Form', event);
  }
}
