import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-comp',
  templateUrl: './event-comp.component.html',
  styleUrls: ['./event-comp.component.css']
})
export class EventCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: number) {
    console.log(value);
  }
  handelEvent(event: any) {
    console.log(event.target);
  }
  handleInput(event: any) {
    console.log(event.target.value);
  }

}
