import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  // titleOne = false;

  hoveredIndex: number | null = null;
  hoveredIndexSec: number | null = null;

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
      title: 'material design'
    },

  ]

  secondRow = [
    {
      source: 'assets/img/skills/py.png',
      title: 'python'
    },

    {
      source: 'assets/img/skills/dj.png',
      title: 'django'
    },

    {
      source: 'assets/img/skills/dr.png',
      title: 'django rest framework'
    },

    {
      source: 'assets/img/skills/cloud.png',
      title: 'google cloud'
    },

    {
      source: 'assets/img/skills/sql.png',
      title: 'sql'
    },

    {
      source: 'assets/img/skills/postgresql.png',
      title: 'postgresql'
    },

    {
      source: 'assets/img/skills/firebase.png',
      title: 'firebase'
    },

    {
      source: 'assets/img/skills/redis.png',
      title: 'redis'
    },

  ]

  showTitle(index: number) {
    this.hoveredIndex = index;
  }

  showTitleSec(index: number) {
    this.hoveredIndexSec = index;
  }

  showImg() {
    this.hoveredIndex = null;
    this.hoveredIndexSec = null;
  }

}
