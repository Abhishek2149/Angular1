import { Component, ViewChild } from '@angular/core';
import { TestDirectiveDirective } from '../test-directive.directive';

@Component({
  selector: 'app-use-custom-directive',
  imports: [TestDirectiveDirective],
  templateUrl: './use-custom-directive.component.html',
  styleUrl: './use-custom-directive.component.css'
})
export class UseCustomDirectiveComponent {
  //exclamation mark (!) is called the definite assignment assertion operator in TypeScript
  //the field should not be null or undefined
  @ViewChild(TestDirectiveDirective) myDir!: TestDirectiveDirective;
  changeColor(color: string) {
    this.myDir.changeBackground(color);
  }

}