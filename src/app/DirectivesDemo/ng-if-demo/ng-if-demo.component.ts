import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-if-demo',
  imports: [CommonModule],
  templateUrl: './ng-if-demo.component.html',
  styleUrl: './ng-if-demo.component.css'
})
export class NgIfDemoComponent {
  isValid:boolean = false;
  buttonCaption:string = "Remove Block"

  onCreateBlock(){
    if(this.isValid == true){
      this.isValid = false;
      this.buttonCaption = "Add Block"
    }
    else{
      this.isValid = true;
      this.buttonCaption = "Remove Block"
    }
  }
}
