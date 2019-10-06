import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    projectName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    status: ['']
  })

  ngOnInit() {
  }

  submitForm() {
    console.log('submit', this.form.value);
    console.log('valid', this.form.valid);
  }

}
