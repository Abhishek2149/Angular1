import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';
@Component({
  selector: 'app-one-way-binding',
  imports: [CommonModule],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {
  msg: string = "";
  onchangetxt :string = "";

  onAddCart() {
    this.msg = "Item moved to cart"
  }
  onRemoveCart() {
    this.msg = "Item removed form cart"
  }
  onChange(){
    this.onchangetxt = "The text box value changed"
  }

  onBlur(){
    alert('Out of text editor')
  }



  message: string = "This is from one way binding"
  appStatus: boolean = true
  statusTrue: string = "Online!"
  statusFalse: string = "Offline"

  username: string = "Abhishek"
  enable: boolean = false
  myStyle: {} = {
    color: 'red',
    fontSize: '20px',

  };
  multipleClasses: {} = {
    class1: true,
    class2: true,
    class3: false //if you put false this style class will not be applied on element
    //for ngClass only
  }
}
