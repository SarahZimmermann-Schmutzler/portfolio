import { Component } from '@angular/core';

@Component({
  selector: 'app-startscreen-mobile',
  templateUrl: './startscreen-mobile.component.html',
  styleUrls: ['./startscreen-mobile.component.scss']
})
export class StartscreenMobileComponent {
  toContactMobile() {
    window.location.href='#contact-mobile';
  }
}
