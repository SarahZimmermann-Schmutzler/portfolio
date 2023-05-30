import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  gitSlack() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/MySlack', '_blank');
  }

  gitPollo() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/El_Pollo_Loco', '_blank');
  }

  gitJoin() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/join_new', '_blank');
  }

  serverSlack() {
    window.open('https://myslack-6868b.web.app/', '_blank');
  }

  serverPollo() {
    window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/elPolloLoco/index.html', '_blank');
  }

  serverJoin() {
    window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/join_new/index.html', '_blank');
  }
}
