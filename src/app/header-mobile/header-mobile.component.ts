import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  @Input() openMenu = false;

  showMenu() {
    this.openMenu = true;
  }

  closeMenu() {
    this.openMenu = false;
  }
}
