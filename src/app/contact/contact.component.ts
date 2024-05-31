import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // @ViewChild('myForm') myForm!: ElementRef;
  // @ViewChild('nameField') nameField!: ElementRef;
  // @ViewChild('mailField') mailField!: ElementRef;
  // @ViewChild('messageField') messageField!: ElementRef;
  // @ViewChild('sendBtn') sendBtn!: ElementRef;
  
  sendingSuccess = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  }
  disabled = true;
  mailTest = true;
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
    console.log(this.contactData)
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
