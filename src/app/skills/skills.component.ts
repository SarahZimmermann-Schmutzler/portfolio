import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  // titleOne = false;

  hoveredIndex: number | null = null;

  firstRow = [
    {
      source: 'assets/img/skills/angular.png',
      title: 'angular'
    },

    {
      source: 'assets/img/skills/js.png',
      title: 'javascript'
    },

    {
      source: 'assets/img/skills/css.png',
      title: 'css'
    },

    {
      source: 'assets/img/skills/html.png',
      title: 'html'
    },

    {
      source: 'assets/img/skills/chatgpt.png',
      title: 'chatgpt'
    },

    {
      source: 'assets/img/skills/git.png',
      title: 'git'
    },

    {
      source: 'assets/img/skills/scrum.png',
      title: 'scrum'
    },

    {
      source: 'assets/img/skills/md.png',
      title: 'Material Design'
    },

  ]

  showTitle(index: number) {
    this.hoveredIndex = index;
  }

  showImg() {
    this.hoveredIndex = null;
  }

}
