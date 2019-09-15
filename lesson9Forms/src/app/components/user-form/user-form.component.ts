import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserData} from '../../models/user-data.interface';
import {RandomUserName} from '../../services/random-user-name.services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(private randomUserName: RandomUserName) { }

  @Output()
  updateUser: EventEmitter<UserData> = new EventEmitter<UserData>();

  @ViewChild('form', {static: false}) form: NgForm;

  addRandUser() {
    const randUser = this.randomUserName.generateName();
    this.form.form.patchValue({
      user: {
        userName: randUser
      }
    });
  }

  submitForm() {
    this.updateUser.emit(this.form.value);
  }
}
