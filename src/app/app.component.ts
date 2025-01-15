import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './myfirstwebsite/header/header.component';
import { TopNavComponent } from './myfirstwebsite/top-nav/top-nav.component';
import { LeftTextBlockComponent } from './myfirstwebsite/left-text-block/left-text-block.component';
import { RightTextBlockComponent } from './myfirstwebsite/right-text-block/right-text-block.component';
import { FooterComponent } from './myfirstwebsite/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TopNavComponent,LeftTextBlockComponent,RightTextBlockComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concepts';
}
