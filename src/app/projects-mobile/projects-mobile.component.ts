import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss']
})
export class ProjectsMobileComponent {

  constructor(private router: Router) {}

  projects = [
    {
      'image': 'ring.png',
      'title': 'RING OF FIRE',
      'langs': 'Angular | Firebase | TypeScript | HTML | SCSS',
      'description': 'Popular Card Game "Ring of Fire" as a multiplayer App. Coded with Angular and Firebase.',
      'tryBtn': 'serverRof',
      'gitBtn': 'gitRof'
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


  projectServer() {
    if('serverRof') {
      window.open('https://ring-of-fire-54fa3.web.app', '_blank');
    }
    
    if('serverPollo') {
      window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/elPolloLoco/index.html', '_blank');
    }

    if('serverJoin') {
      window.open('https://sarah-zimmermann-schmutzler.developerakademie.net/join_new/index.html', '_blank');
    }
  }

  projectGit() {

  }

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
