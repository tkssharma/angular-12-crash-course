import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  someNumber = 0;

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      const number = this.someNumber + 1
      this.intervalFired.emit(number);
      this.someNumber++;
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }


}
