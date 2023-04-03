import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
  sendingSuccess = false;


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    this.disableBtn(nameField, mailField, messageField, sendBtn);

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', mailField.value);
    formData.append('message', messageField.value);

    try {
      // senden Daten per Post request an folgende URL
      let response = await fetch('https://sarah-zimmermann-schmutzler.developerakademie.net/send_mail_portfolio/send_mail.php',
        {
          method: 'POST',
          body: formData
        })
      if (!response.ok)
        throw response;
    } catch (error) { console.log(error) }

    this.mailDelivered();

    setTimeout(() => {
      this.activateBtn(nameField, mailField, messageField, sendBtn);
    }, 4500)
  }

  disableBtn(nameField: any, mailField: any, messageField: any, sendBtn: any) {
    nameField.disable = true;
    mailField.disable = true;
    messageField.disable = true;
    sendBtn.disable = true;
  }

  mailDelivered() {
    this.sendingSuccess = true;
  }

  activateBtn(nameField: any, mailField: any, messageField: any, sendBtn: any) {
    this.sendingSuccess = false;
    nameField.disabled = false;
    nameField.value = '';
    mailField.disabled = false;
    mailField.value = '';
    messageField.disabled = false;
    messageField.value = '';
    sendBtn.disabled = false;
  }
}
