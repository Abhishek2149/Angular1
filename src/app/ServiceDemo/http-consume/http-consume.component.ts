import { Component,OnInit } from '@angular/core';
import { HttpUtilityService } from '../http-utility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-consume',
  imports: [CommonModule],
  templateUrl: './http-consume.component.html',
  styleUrl: './http-consume.component.css'
})
export class HttpConsumeComponent implements OnInit {

  UserList:any;
  constructor(private HttpConsume:HttpUtilityService){}

  ngOnInit(): void {
   this.UserList = this.HttpConsume.getUsers().subscribe(users => this.UserList = users);
  }

}
