import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Log} from "./log";

@Injectable({
  providedIn: 'root'
})
export class LogStateService {
  private logArr = [];
  private logging  = new BehaviorSubject(this.logArr);
  readonly logArrOut = this.logging.asObservable();

  constructor() { }

  setLog(itemLog: Log[]): void {
    this.logArr.push(itemLog);
    this.logging.next(this.logArr);
    localStorage.setItem('logs' ,JSON.stringify(this.logArr));
  }

  getLog() {
    return this.logging.asObservable();
  }

  delLog(id) {
    this.logArr.forEach((i, index) => {
      if (i.id === id) {
        this.logArr.splice(index, 1)
      }
    })
  }

  updateLog(val) {
    this.logArr.forEach((item) => {
      if (item.id === val.id) {
        item.text = val.text;
        item.date = val.date
      }
    });
    this.logging.next(this.logArr)
  }
}
