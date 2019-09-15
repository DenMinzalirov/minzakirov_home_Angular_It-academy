import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUserName {
  randomName: string[] = [
    'Вася',
    'Федя',
    'Алиса',
    'Яна',
    'Денис',
    'Олег',
    'Полина'];
  generateName() {
    return this.randomName[Math.floor(Math.random() * this.randomName.length)];
  }

}
