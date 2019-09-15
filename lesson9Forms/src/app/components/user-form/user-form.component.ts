import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @ViewChild('form', {static: false}) form: NgForm;

  addRandUser() {
    const randUser = 'RandomUser';
    this.form.form.patchValue({
      user: {
        userName: randUser
      }
    });
  }

  submitForm() {
    console.log(this.form);
  }

  constructor() { }

  ngOnInit() {
  }

}
