import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  titleOne = false;

  firstRow = [
    {
      source: 'assets/img/skills/angular.png',
      name: 'angular'
    },

    {
      source: 'assets/img/skills/ts.png',
      name: 'typesript'
    },

    {
      source: 'assets/img/skills/js.png',
      name: 'javascript'
    },

    {
      source: 'assets/img/skills/html.png',
      name: 'html'
    },

    {
      source: 'assets/img/skills/scrum.png',
      name: 'scrum'
    },

  ]

}
