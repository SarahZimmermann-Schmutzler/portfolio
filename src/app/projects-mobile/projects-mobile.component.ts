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
      'tryBtn': 'serverVideo',
      'gitBtn': 'gitVideo'
    },

    {
      'image': 'join.png',
      'title': 'KenBen',
      'langsF': 'Angular | JavaScript | HTML | SCSS',
      'langsB': 'Python | Django | Django REST framework',
      'description': 'Ein Taskmanager inspiriert vom Kanban System. Erstelle und organisiere Aufgaben und ordne sie mittels Drag and Drop verschiedenen Rubriken zu.',
      'tryBtn': 'serverKenben',
      'gitBtn': 'gitKenben'
    },

    {
      'image': 'slack1.png',
      'title': 'MySlack',
      'langsF': 'Angular | JavaScript | HTML | SCSS',
      'langsB': 'Firebase',
      'description': 'Ein Kurznachrichtendienst in Echtzeit. Programmiert mit Angular und Firebase.',
      'tryBtn': 'serverSlack',
      'gitBtn': 'gitSlack'
    },
  ];


  projectServer(pageToGo: any) {
    if(pageToGo == 'serverSlack') {
      window.open('https://myslack-6868b.web.app/', '_blank');
    }
    
    if(pageToGo == 'serverVideo') {
      window.open('https://videoflix.s-zimmermann-schmutzler.de/home', '_blank');
    }

    if(pageToGo == 'serverKenben') {
      window.open('https://www.kenben.s-zimmermann-schmutzler.de/login', '_blank');
    }
  }

  projectGit(pageToGo: any) {
    if(pageToGo == 'gitSlack') {
      window.open('https://github.com/SarahZimmermann-Schmutzler/MySlack', '_blank');
    }
    
    if(pageToGo == 'gitVideo') {
      window.open('https://github.com/SarahZimmermann-Schmutzler/videoflix_frontend', '_blank');
    }

    if(pageToGo == 'gitKenben') {
      window.open('https://github.com/SarahZimmermann-Schmutzler/kenben_frontend', '_blank');
    }
  }
}
