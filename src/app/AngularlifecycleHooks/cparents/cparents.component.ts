import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CchildComponent } from '../cchild/cchild.component';

@Component({
  selector: 'app-cparents',
  imports: [CchildComponent, CommonModule],
  templateUrl: './cparents.component.html',
  styleUrl: './cparents.component.css'
})
export class CparentsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  UserName: string = ""
  ChildExist: boolean = true;
  submitValue(User: any) {
    this.UserName = User.value;
  }

  destory() {
    this.ChildExist = false;
  }

}
