import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {

  @Input() counter;
  tempCounterEven = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.counter % 2 === 0 && this.counter !== 0) {
      this.tempCounterEven.push(this.counter);
    }
  }

}
