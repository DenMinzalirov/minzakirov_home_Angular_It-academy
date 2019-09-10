import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  count = 0;
  counter() {
    this.count++;
    console.log('Использование активации/дезактивации', this.count);
  }
}
