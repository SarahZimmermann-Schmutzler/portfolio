import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-mobile',
  templateUrl: './projects-mobile.component.html',
  styleUrls: ['./projects-mobile.component.scss']
})
export class ProjectsMobileComponent {

  projects = [
    {
      'image': 'pollo.png',
      'title': 'VIDEOFLIX',
      'langsF': 'Angular | JavaScript | HTML | SCSS',
      'langsB': 'Python | Django | Django REST framework',
      'description': 'Video-Streaming-Seite im Stil von Netflix.',
      'tryBtn': 'serverPollo',
      'gitBtn': 'gitPollo'
    },

    {
      'image': 'join.png',
      'title': 'KenBen',
      'langsF': 'Angular | JavaScript | HTML | SCSS',
      'langsB': 'Python | Django | Django REST framework',
      'description': 'Ein Taskmanager inspiriert vom Kanban System. Erstelle und organisiere Aufgaben und ordne sie mittels Drag and Drop verschiedenen Rubriken zu.',
      'tryBtn': 'serverJoin',
      'gitBtn': 'gitJoin'
    },

    {
      'image': 'slack1.png',
      'title': 'MySlack',
      'langsF': 'Angular | JavaScript | HTML | SCSS',
      'langsB': 'Firebase',
      'description': 'Kurznachrichtendienst in Echtzeit. Programmiert mit Angular und Firebase.',
      'tryBtn': 'serverSlack',
      'gitBtn': 'gitSlack'
    },
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
