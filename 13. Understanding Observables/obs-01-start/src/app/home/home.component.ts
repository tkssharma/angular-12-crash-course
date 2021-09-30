import { Component, OnInit } from '@angular/core';


export interface People {
  country: string;
  name: string;

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peoples: People[] = [{
    name: 'tst',
    country: 'INDIA'
  }, {
    name: 'tst',
    country: 'UK'
  }, {
    name: 'tst',
    country: 'USA'
  }, {
    name: 'tst',
    country: 'HK'
  }, {
    name: 'tst',
    country: 'INDIA'
  }]
  constructor() { }

  title = 'my-first-app';
  todaydate = new Date();
  jsonval = { name: 'Alex', age: '25', address: { a1: 'Paris', a2: 'France' } };
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  ngOnInit() {
  }

}


/*
Lowercasepipe
Uppercasepipe
Datepipe
Currencypipe
Jsonpipe
Percentpipe
*/