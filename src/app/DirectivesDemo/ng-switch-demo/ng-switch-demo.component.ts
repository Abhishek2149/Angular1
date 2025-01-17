import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch-demo',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-switch-demo.component.html',
  styleUrl: './ng-switch-demo.component.css'
})
export class NgSwitchDemoComponent {
  switch_expression:any;

}
