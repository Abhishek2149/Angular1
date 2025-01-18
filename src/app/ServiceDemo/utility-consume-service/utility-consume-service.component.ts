import { Component,OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';
import { IUser } from '../../iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utility-consume-service',
  imports: [CommonModule],
  templateUrl: './utility-consume-service.component.html',
  styleUrl: './utility-consume-service.component.css'
})
export class UtilityConsumeServiceComponent implements OnInit {
  

  constructor(private _Service : UtilityService){

  }
  User!:IUser;

  UserList:IUser[]=[];
  ngOnInit(): void {
    this.UserList = this._Service.Users;
    this.User = this._Service.user
  }

  ShowMessage(){
    this._Service.showMessage();
  }


}
