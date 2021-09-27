import { Component, Input, OnInit } from '@angular/core';
import { serverData } from '../app.component';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() name: string;
  @Input('srvElement') element: serverData;
  constructor() { }

  ngOnInit(): void {
  }

}
