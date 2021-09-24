import { Component, Input, OnInit } from '@angular/core';
import { User } from '../event-comp/event-comp.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
