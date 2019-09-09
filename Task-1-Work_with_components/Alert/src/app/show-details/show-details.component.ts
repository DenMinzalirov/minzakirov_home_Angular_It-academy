import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showDetails = false;
  log = [];

  togDetails() {
    this.showDetails = !this.showDetails;
    this.log.push(this.log.length + 1)
  }

  constructor() { }

  ngOnInit() {
  }

}
