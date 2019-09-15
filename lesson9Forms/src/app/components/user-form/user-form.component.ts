import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserData} from '../../models/user-data.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Output()
  updateUser: EventEmitter<UserData> = new EventEmitter<UserData>();

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
    this.updateUser.emit(this.form.value)
    console.log(this.form.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
