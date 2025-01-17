import { Component } from '@angular/core';
import { IProduct } from '../../iproduct';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
title:string = "Products";
  products:IProduct[] =[
    {'productId':1,"productName":"Laptop","productPrice":75000.00},
    {'productId':2,"productName":"Jeans","productPrice":2000.00},
    {'productId':3,"productName":"TShirl","productPrice":1500.00},
    {'productId':4,"productName":"Bag","productPrice":700.00},
    {'productId':5,"productName":"Desktop","productPrice":35000.00}
  ]
}
