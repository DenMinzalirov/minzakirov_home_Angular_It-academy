import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  interval;
  count = 0;

  control(event) {
    // console.log(event);
    this.count++;
    // console.log(this.count);
    // this.interval = setInterval(() => {
    //   this.count++;
    //   console.log(this.count);
    // },1000)

  }



  title = 'Ls7TimerControl';
}
