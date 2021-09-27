import { Component } from '@angular/core';
export interface serverData {
  type: string;
  name: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [ {
    type: 'server',
    name: 'testServer',
    content: 'Just as Test'
  }]

  onServerAdded(serverData: serverData){
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }
}
