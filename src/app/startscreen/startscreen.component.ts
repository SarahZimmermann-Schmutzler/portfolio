import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {
  deutsch;
  begin = true;
  english;
  

  constructor(public service: TranslationService) {}

  ngOnInit() {
    this.deutsch = this.service.deutsch;
    this.english = this.service.english;
    console.log(this.deutsch)
    console.log(this.english)
  }

  toContact() {
    window.location.href = '#contact';
  }
}
