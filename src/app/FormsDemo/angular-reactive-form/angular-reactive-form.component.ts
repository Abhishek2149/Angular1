import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { UsersService } from '../../ServiceDemo/users.service';
@Component({
  selector: 'app-angular-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './angular-reactive-form.component.html',
  styleUrl: './angular-reactive-form.component.css'
})
export class AngularReactiveFormComponent implements OnInit {

  constructor(private service:UsersService){}
  myReactiveForm:any;
  genders =[
    {id:1,name:'male'},
    {id:2,name:'female'},
    {id:3,name:'others'}
  ]

  submited = false;
  onSubmit(userData:any){
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    this.service.addUserData(userData).subscribe()
    this.submited = true;
  }

  OnAddSkills()
  {
    const control =
      new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }
  OnRemoveSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt((<FormArray>this.myReactiveForm.get('skills')).length - 1);
  }

  
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name' : new FormControl('',[Validators.required,Validators.pattern("^[A-Z]{1}[a-z]{2,20} [A-Z]{1}[a-z]{2,20}$")]),
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'mobile' : new FormControl('',[Validators.required,Validators.pattern("^[1-9]{1}[0-9]{9}$")]),
      'course' : new FormControl('Angular'),
      'gender' : new FormControl('male'),
      'skills' : new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required)
      ])


    })
  }

}
