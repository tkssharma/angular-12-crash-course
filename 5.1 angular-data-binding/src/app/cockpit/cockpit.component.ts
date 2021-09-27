import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { serverData } from '../app.component';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<serverData>()
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      name: 'testServer',
      content: 'Just as Test'
    })
  }

}
