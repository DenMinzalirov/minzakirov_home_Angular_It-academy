import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Log} from "./log";
import {LogStateService} from "./log-state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  checkP = false;
  id = () => {
    return (~~(Math.random()*1e8)).toString(16)
  };

  arrLog: Observable<Log[]> = this.logStateService.logArrOut;

  constructor(private fb: FormBuilder,
              private logStateService: LogStateService) {}

  logForm: FormGroup = this.fb.group({
    id: [null],
    text: ['', [Validators.required]],
    date: ['']
  });

  addLog() {
    const date = new Date();
    if (this.logForm.value.id) {
      const date = new Date();
      this.logForm.patchValue({
        date: date
      });
      console.log('upd', this.logForm.value);
      this.logStateService.updateLog(this.logForm.value);
      this.logForm.reset({date: date});
      return
    }
    this.logForm.patchValue({
      id: this.id(),
      date: date
    });
    this.logStateService.setLog(this.logForm.value);
    this.logForm.reset({date: date});
    this.checkP = false;
  }

  ngOnInit() {
    this.checkP = true;
    this.arrLog.subscribe(console.log)
    // this.arrLog = this.logStateService.logArrOut;
  }

  deleteLog(id) {
    if (confirm("Вы - точно хотите удалить этот лог?")){
      this.logStateService.delLog(id);
    }
  }

  updateLog(id) {
    const date = new Date();
    this.logStateService.getLog().subscribe(
      arrLog => arrLog.forEach(item =>{
        if (item.id === id) {
          this.logForm.patchValue({
            id: item.id,
            date: date,
            text: item.text
          });
        }
      })
    )
  }
}
