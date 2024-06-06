import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  border = true;


  constructor(public translation: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
   // translate.use('en');
   // fügen das in HTML als Link ein, um Sprachen zu switchen
}

ngOnInit() {}

}
