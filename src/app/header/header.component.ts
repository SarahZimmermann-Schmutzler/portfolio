import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public translation: TranslateService, public service: TranslationService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
   // translate.use('en');
   // fügen das in HTML als Link ein, um Sprachen zu switchen
}

deutsch = true;
english = false;

ngOnInit() {
  this.deutsch = true;
}

translateToGerman() {
  this.service.deutsch = true;
  this.service.english = false;
}

translateToEnglish() {
  this.service.english = true;
  this.service.deutsch = false;
}

}
