import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {

  @Input() counter;
  tempCounterOdd = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.counter % 2 !== 0 && this.counter !== 0) {
      this.tempCounterOdd.push(this.counter);
    }
  }
}
