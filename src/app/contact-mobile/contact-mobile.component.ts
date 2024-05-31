import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent {
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


  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.watchForm();
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

