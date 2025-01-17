import { Directive,ElementRef,Renderer2,viewChild } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el:ElementRef,private rendere:Renderer2) {
    this.rendere.setStyle(this.el.nativeElement,'backgroundColor','red')
  }
  changeBackground(color:string){
    this.rendere.setStyle(this.el.nativeElement,'backgroundColor',color)

  }

}
