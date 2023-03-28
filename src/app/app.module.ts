import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { StartscreenMobileComponent } from './startscreen-mobile/startscreen-mobile.component';
import { AboutMobileComponent } from './about-mobile/about-mobile.component';
import { SkillsMobileComponent } from './skills-mobile/skills-mobile.component';
import { ProjectsMobileComponent } from './projects-mobile/projects-mobile.component';
import { ContactMobileComponent } from './contact-mobile/contact-mobile.component';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    MainpageComponent,
    DataProtectionComponent,
    HeaderMobileComponent,
    StartscreenMobileComponent,
    AboutMobileComponent,
    SkillsMobileComponent,
    ProjectsMobileComponent,
    ContactMobileComponent,
    FooterMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
