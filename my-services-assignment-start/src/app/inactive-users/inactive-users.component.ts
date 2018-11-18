import { Component } from '@angular/core';
import { UserService } from 'src/app/users.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  constructor(private userService: UserService){}
  
  ngOnInit(){
    this.users =  this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
