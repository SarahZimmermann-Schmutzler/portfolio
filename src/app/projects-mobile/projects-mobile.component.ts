import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss']
})
export class ProjectsMobileComponent {

  projects = [
    {
      'image': 'slack1.png',
      'title': 'MySlack',
      'langs': 'Angular | Firebase | TypeScript | HTML | SCSS',
      'description': 'Instant messaging program. Coded with Angular and Firebase.',
      'tryBtn': 'serverSlack',
      'gitBtn': 'gitSlack'
    },

    {
      'image': 'pollo.png',
      'title': 'EL POLLO LOCO',
      'langs': 'JavaScript | HTML | CSS',
      'description': 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      'tryBtn': 'serverPollo',
      'gitBtn': 'gitPollo'
    },

    {
      'image': 'join.png',
      'title': 'JOIN',
      'langs': 'JavaScript | HTML | CSS',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'tryBtn': 'serverJoin',
      'gitBtn': 'gitJoin'
    }
  ];


  projectServer(pageToGo: any) {
    if(pageToGo == 'serverSlack') {
      window.open('https://myslack-6868b.web.app/', '_blank');
    }
    
    if(pageToGo == 'serverPollo') {
      window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/elPolloLoco/index.html', '_blank');
    }

    if(pageToGo == 'serverJoin') {
      window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/join_new/index.html', '_blank');
    }
  }

  projectGit(pageToGo: any) {
    if(pageToGo == 'gitSlack') {
      window.open('https://github.com/SarahZimmermann-Schmutzler/MySlack', '_blank');
    }
    
    if(pageToGo == 'gitPollo') {
      window.open('https://github.com/SarahZimmermann-Schmutzler/El_Pollo_Loco', '_blank');
    }

    if(pageToGo == 'gitJoin') {
      window.open('https://github.com/SarahZimmermann-Schmutzler/join_new', '_blank');
    }
  }
}
