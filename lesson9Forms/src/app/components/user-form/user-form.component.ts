import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserData} from '../../models/user-data.interface';
import {RandomUserName} from '../../services/random-user-name.services';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {

  randUser;

  constructor(private randomUserName: RandomUserName) { }

  @Output()
  updateUser: EventEmitter<UserData> = new EventEmitter<UserData>();

  @ViewChild('form', {static: false}) form: NgForm;

  addRandUser() {
    const data = this.randomUserName.generateName();
    console.log(data);
    // let randUser;
    // this.randomUserName.generateName().subscribe((res: Response) => {
    //   let data = res[Math.floor(Math.random() * 7)];
    //   this.randUser = data;
    //   console.log(this.randUser) ;
    // });
    //
    // this.form.form.patchValue({
    //   user: {
    //     userName: this.randUser
    //   }
    // });
  }

  submitForm() {
    this.updateUser.emit(this.form.value);
    this.form.reset();
  }
}
