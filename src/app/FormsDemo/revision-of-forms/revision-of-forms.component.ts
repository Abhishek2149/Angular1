import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-revision-of-forms',
  imports: [FormsModule,CommonModule],
  templateUrl: './revision-of-forms.component.html',
  styleUrl: './revision-of-forms.component.css'
})
export class RevisionOfFormsComponent {

  onSubmit(data:any){
    //if we transfer registrationForm.controls
    //console.log(data.email.value)

    //if we transfer registrationForm.value
    console.log(data)
  }
}
