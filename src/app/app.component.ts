import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from './myfirstwebsite/header/header.component';
// import { TopNavComponent } from './myfirstwebsite/top-nav/top-nav.component';
// import { LeftTextBlockComponent } from './myfirstwebsite/left-text-block/left-text-block.component';
// import { RightTextBlockComponent } from './myfirstwebsite/right-text-block/right-text-block.component';
// import { FooterComponent } from './myfirstwebsite/footer/footer.component';

import { CallbackWebsiteComponent } from './myfirstwebsite/callback-website/callback-website.component';
import { OneWayBindingComponent } from './BindingDemo/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './BindingDemo/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './BindingDemo/event-binding/event-binding.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CallbackWebsiteComponent,OneWayBindingComponent,CommonModule,TwoWayBindingComponent,FormsModule,EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concepts';
}
