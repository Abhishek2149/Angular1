import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cchild',
  imports: [],
  templateUrl: './cchild.component.html',
  styleUrl: './cchild.component.css'
})
export class CchildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() UserName: string = "";

  counter: any;
  num: number = 1;
  constructor(private _ngZone: NgZone) {
    console.log("Constructor Called");
    //console.log(this.user);
  }
  ngOnChanges(Changes: SimpleChanges) {
    console.log("ngOnChanges Called");
    console.log(Changes['UserName'].currentValue);
    console.log(Changes['UserName'].previousValue);
    console.log(Changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Called");
    this._ngZone.runOutsideAngular(() => {
      this.counter = setInterval(() => {
        this.num = this.num + 1;
        console.log(this.num);
        if (this.counter >= 100) {   // otherwise later app will be hang
          clearInterval(this.counter);
        }
      }, 1000);

    })
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit Called");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Called");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called");
    clearInterval(this.counter);
  }

}

