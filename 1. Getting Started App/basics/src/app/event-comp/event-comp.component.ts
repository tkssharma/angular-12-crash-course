import { Component, OnInit } from '@angular/core';

export interface User {
  name?: string;
  email: string;
  address?: string;
}
@Component({
  selector: 'app-event-comp',
  templateUrl: './event-comp.component.html',
  styleUrls: ['./event-comp.component.css']
})

export class EventCompComponent implements OnInit {

  users: User[] = [];
  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        email: 'test@gmail.com'
      },
      {
        email: 'test@gmail.com'
      },
      {
        email: 'test@gmail.com'
      }
    ]
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
