import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  borderVideoflix = false; 
  borderKenben = false; 
  borderSlack = false; 

  gitSlack() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/MySlack', '_blank');
  }

  gitVideo() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/videoflix_frontend', '_blank');
  }

  gitKenben() {
    window.open('https://github.com/SarahZimmermann-Schmutzler/kenben_frontend', '_blank');
  }

  serverSlack() {
    window.open('https://myslack-6868b.web.app/', '_blank');
  }

  serverVideo() {
    window.open('https://videoflix.s-zimmermann-schmutzler.de/home', '_blank');
  }

  serverKenben() {
    window.open('https://www.kenben.s-zimmermann-schmutzler.de/login', '_blank');
  }
}
