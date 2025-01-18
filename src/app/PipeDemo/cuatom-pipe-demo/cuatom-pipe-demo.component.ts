import { Component } from '@angular/core';
import { ReverseStringPipe } from '../reverse-string.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuatom-pipe-demo',
  imports: [CommonModule,ReverseStringPipe],
  templateUrl: './cuatom-pipe-demo.component.html',
  styleUrl: './cuatom-pipe-demo.component.css'
})
export class CuatomPipeDemoComponent {

  nameStr = "Abhishek"
  nameList:string[] =[
    "Abhishek Jaybhaye","Akash Shirsath",
    "Swaraj Kanawade","Vishal Kadlag",
    "Rohan Jundare", "Ashutosh Kandhal",
    "Siddharth Jadhav" , "Vikrant Shinde"
  ]
}
