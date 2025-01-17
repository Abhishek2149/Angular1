import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  textMessage: string = ""
  msg: string = ""
  info: string = ""
  onChangeEvent(event?: any) {
    console.log(event.target.value);
    this.textMessage = event.target.value;

  }

  UserName: string = ""

  AddtoCart2() {
    this.msg = "Product Added in cart";
  

  }
  AddtoCart(event?: MouseEvent) {
    this.msg = event ? (event.target as HTMLElement).innerHTML + " Added in Cart" : "Wrong action";
  }
  getInputInfo(myInputinfo: any) {
    console.log(myInputinfo.value)
    this.info = myInputinfo.value

  }

  GreetingForTheDay(uname: any) {
    this.UserName = uname.value;

  }

  anyname: string = "";

  orderforsomething(inputorder: any) {
    this.anyname = inputorder.value;

  }

}
