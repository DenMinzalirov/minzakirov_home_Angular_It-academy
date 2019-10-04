import { Injectable } from '@angular/core';

@Injectable()
export class PaintService {
  x;
  y;
  constructor() { }
  ctx: CanvasRenderingContext2D;

  init(el: HTMLCanvasElement) {
    this.ctx = el.getContext('2d');
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 10;
  }

  paint(event) {
    this.x = event.x;
    this.y = event.y
    this.ctx.strokeStyle = 'black';
    this.ctx.beginPath();
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }
}
