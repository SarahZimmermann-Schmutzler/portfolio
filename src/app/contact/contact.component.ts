import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  sendingSuccess = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  }
  disabled = true;
  mailTest = false;
  post = {
    endPoint: 'https://s-zimmermann-schmutzler.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  animationFirstRow = false;
  animationSecRow = false;
  animationThirdRow = false;
  animationFourthRow = false;
  // @ViewChildren('typewriter') typewriterElements: QueryList<ElementRef>;


  constructor(public http: HttpClient, private renderer: Renderer2) {}

  ngOnInit() {
    this.watchForm();
  }

  startAnimation() {
    this.animationFirstRow = true;
    
    setTimeout(() => {
      this.animationSecRow = true;
    }, 5000);

    setTimeout(() => {
      this.animationThirdRow = true;
    }, 10000);

    setTimeout(() => {
      this.animationFourthRow = true;
    }, 15000);
  }


  watchForm() {
    setInterval(() => {
      if (
        this.contactData.email.includes('@') &&
        this.contactData.email.includes('.') &&
        this.contactData.name.length > 0 &&
        this.contactData.message.length > 0
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }, 500);
  }

  sendMail() {
    if (!this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.sendingSuccess = true;
            this.contactData.name = '';
            this.contactData.email = '';
            this.contactData.message = '';
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (this.mailTest) {
      console.log('Testmodus funzt');
      this.sendingSuccess = true;
      this.contactData.name = '';
      this.contactData.email = '';
      this.contactData.message = '';
    }
  }


}
