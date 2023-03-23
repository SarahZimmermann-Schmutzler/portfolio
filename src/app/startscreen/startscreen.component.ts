import { Component } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {
  toContact() {
    window.location.href='#contact';
  }
}
