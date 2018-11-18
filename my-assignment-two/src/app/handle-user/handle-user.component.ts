import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handle-user',
  templateUrl: './handle-user.component.html',
  styleUrls: ['./handle-user.component.css']
})
export class HandleUserComponent implements OnInit {
  userName='';
  constructor() { }
  
  resetUserName(){
    this.userName='';
  }

  ngOnInit() {
  }
  
}
