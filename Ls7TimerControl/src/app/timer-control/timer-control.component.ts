import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.css']
})
export class TimerControlComponent implements OnInit {
  interval;
  // timer = [];
  // count = 0;

  constructor() { }

  @Output() onClick = new EventEmitter();

  startTimer() {

    this.interval = setInterval(()=> {
      this.onClick.emit();
      // this.timer.push(this.timer.length + 1);
      // this.count++;
      // console.log(this.timer)
      // console.log(this.count)
    },1000)
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  ngOnInit() {
  }

}
