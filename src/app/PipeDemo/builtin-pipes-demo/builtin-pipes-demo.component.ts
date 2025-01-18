import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable,Observer} from 'rxjs';
@Component({
  selector: 'app-builtin-pipes-demo',
  imports: [CommonModule],
  templateUrl: './builtin-pipes-demo.component.html',
  styleUrl: './builtin-pipes-demo.component.css'
})
export class BuiltinPipesDemoComponent {
  date = new Date()
  birthday = new Date(2000,6,23);
  name = "Abhishek Jaybhaye";
  balance = 658955.5666595;
  progress = 0.95;
  message = "This is built in pipe demo";

  object  = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  products = [
    {'id':'pro1001','proimg':'noimage.jpg','proname':'laptop','proprice':78789.99},
    {'id':'pro1002','proimg':'noimage.jpg','proname':'mobile','proprice':15000.99},
    {'id':'pro1003','proimg':'noimage.jpg','proname':'speakers','proprice':6000.99},
    {'id':'pro1004','proimg':'noimage.jpg','proname':'desktop','proprice':34000.99},
    {'id':'pro1005','proimg':'noimage.jpg','proname':'keyboard','proprice':1500.99}
  ]

  
  
}
