import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserName {

  constructor(private http: HttpClient) {}

  generateName() {
    let data;
    this.http.get('http://localhost:3000/randomName').subscribe((res) => {
      data = res[Math.floor(Math.random() * res.length)];
      console.log(data);
    });
    return data;
  }
}
