import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { LeftTextBlockComponent } from '../left-text-block/left-text-block.component';
import { RightTextBlockComponent } from '../right-text-block/right-text-block.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-callback-website',
  imports: [HeaderComponent,TopNavComponent,LeftTextBlockComponent,RightTextBlockComponent,FooterComponent],
  templateUrl: './callback-website.component.html',
  styleUrl: './callback-website.component.css'
})
export class CallbackWebsiteComponent {

}
