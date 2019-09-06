import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>success operation!!!</p>',
  styles: ['p{background-color: blue;text-align: center;}']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
