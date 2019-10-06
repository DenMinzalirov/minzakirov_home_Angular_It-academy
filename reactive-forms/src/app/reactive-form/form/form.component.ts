import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    projectName: ['',
      [
        Validators.required,
        // this.checkProjectName()
      ],
      [this.asyncCheck.bind(this)]
    ],
    email: ['', [Validators.required, Validators.email]],
    status: ['', Validators.required]
  });

  options: string[] = ['Stable', 'Critical', 'Finished'];
  test = 'Test';

  private asyncCheck(control: AbstractControl) {
    return of(this.test !== control.value).pipe(
      delay(1000),
      map(response => response ? null : {asyncCheck: true})
    );
  }

  // checkProjectName(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: boolean } | null => {
  //     const valid = this.test !== control.value;
  //     return valid ? null : { projectNameNoTest: true };
  //   };
  // }

  submitForm() {
    console.log('submit', this.form.value);
  }
}
