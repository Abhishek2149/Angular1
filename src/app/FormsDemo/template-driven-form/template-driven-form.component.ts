import { Component } from '@angular/core';
import { IUser } from '../../iuser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../ServiceDemo/users.service';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {


  constructor(private srv: UsersService) {

  }
  submited = false;
  onSubmit(data: any) {
    console.log(data)
    this.submited = true;
    this.srv.addUser(data).subscribe(
      {
        next(value) { console.log('Observable emitted the next value: ' + value); },
        error(err) { console.error('Observable emitted an error: ' + err); },
        complete() { console.log('Observable emitted the complete notification'); }
      }
    )
  }

  userRegistration(info: any) {
    //userRegistration(UserForm.controls) we have to read like
    //console.log(info.name.value + " " + info.username.value)

    //when we pass userRegistration(UserForm.value)
    // console.log(info.name + " " + info.username)
    // console.log(info)
    this.submited = true;
  }
}
