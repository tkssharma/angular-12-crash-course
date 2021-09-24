import { Component, OnInit } from '@angular/core';

export interface Todo {
  task: string;
  id: number;
}
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor() { }
  todotask: string = "";
  todos: Todo[] = [];
  ngOnInit(): void {
  }
  submitForm() {
    this.todos.push({
      task: this.todotask,
      id: this.todos.length + 1
    })
    this.todotask = "";
    console.log(this.todos);
  }

}
