import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from '../service/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private usersService: UsersServiceService) { }

  ngOnInit() {
  }

}
