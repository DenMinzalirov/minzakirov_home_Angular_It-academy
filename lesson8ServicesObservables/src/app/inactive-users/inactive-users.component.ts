import { Component } from '@angular/core';
import {UsersServiceService} from '../service/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent{
  constructor(private usersService: UsersServiceService) { }
}
