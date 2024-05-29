import { Component } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {

  constructor() {}

  ngOnInit() {}

  toContact() {
    window.location.href = '#contact';
  }
}
