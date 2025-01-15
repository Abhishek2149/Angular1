import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  imports: [],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css'
})
export class OneWayBindingComponent {
message:string = "This is from one way binding"
appStatus:boolean = true
statusTrue:string = "Online!"
statusFalse:string = "Offline"
}
