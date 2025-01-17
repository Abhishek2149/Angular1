import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ng-for-demo',
  imports: [CommonModule],
  templateUrl: './ng-for-demo.component.html',
  styleUrl: './ng-for-demo.component.css'
})


export class NgForDemoComponent{
  products:IProduct[]= 
  [
    {id: 'PRO1001',prodImg:'noImage.jpg',prodName:'Laptop',prodPrice:50000},
    {id: 'PRO1002',prodImg:'noImage.jpg',prodName:'Mobile',prodPrice:20000},
    {id: 'PRO1003',prodImg:'noImage.jpg',prodName:'Tablate',prodPrice:15000},
    {id: 'PRO1004',prodImg:'noImage.jpg',prodName:'Desktop',prodPrice:30000}
  ]

}

interface IProduct{
  id:string,
  prodImg:string,
  prodName:string,
  prodPrice:number
}