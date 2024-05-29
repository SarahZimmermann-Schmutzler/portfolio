import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  @Input() openMenu = false;

  constructor(public translation: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');
    // fügen das in HTML als Link ein, um Sprachen zu switchen
  }

  ngOnInit() {
    
  }

  showMenu() {
    this.openMenu = true;
  }

  closeMenu() {
    this.openMenu = false;
  }

  showAbout() {
    this.openMenu = false;
    window.location.href = '#about-mobile';
  }

  showSkills() {
    this.openMenu = false;
    window.location.href = '#skills-mobile';
  }

  showProjects() {
    this.openMenu = false;
    window.location.href = '#projects-mobile';
  }

  showContact() {
    this.openMenu = false;
    window.location.href = '#contact-mobile';
  }
}
