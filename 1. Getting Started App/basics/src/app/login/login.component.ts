import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'tarun';
  password: string = 'sharma';
  constructor() { }

  ngOnInit(): void {

  }
  submitForm() {
    alert(this.username + this.password)
  }

}
