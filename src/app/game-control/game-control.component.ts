import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter = 0;
  t: number;

  @Output() counterUp = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onStart() {
    this.t = setInterval(() => {
      this.counter++;
      this.counterUp.emit(this.counter);
    }, 500);
  }
  onStop() {
    clearInterval(this.t);
  }
}
