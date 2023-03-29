import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss']
})
export class ProjectsMobileComponent {
  gitRof() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/Ring-of-Fire', '_blank');
  }

  gitPollo() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/El_Pollo_Loco', '_blank');
  }

  gitJoin() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/join_new', '_blank');
  }

  serverRof() {
    window.open('https://ring-of-fire-54fa3.web.app', '_blank');
  }

  serverPollo() {
    window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/elPolloLoco/index.html', '_blank');
  }

  serverJoin() {
    window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/join_new/index.html', '_blank');
  }
}
