import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showSecret: boolean = false;
  log: number[] = [];
  constructor() { }


  ngOnInit(): void {
  }

  showMeSecret() {
    this.showSecret = !this.showSecret
  }
  addItems() {
    this.log.push(this.log.length + 1);
  }

}
