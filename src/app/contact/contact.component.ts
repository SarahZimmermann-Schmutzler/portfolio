import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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

  disableBtn(nameField: any, mailField: any, messageField: any, sendBtn:any) {
    nameField.disable = true;
    mailField.disable = true;
    messageField.disable = true;
    sendBtn.disable = true;
  }

  mailDelivered() {
    this.sendingSuccess = true;
  }

  activateBtn(nameField: any, mailField: any, messageField: any, sendBtn:any) {
    this.sendingSuccess = false;
    nameField.disabled = false;
    nameField.value = '';
    mailField.disabled = false;
    mailField.value = '';
    messageField.disabled = false;
    messageField.value = '';
    sendBtn.disabled = false;
  }

  
  
// Mihails try and catch funktion
  // async sendMail() {
  //   let nameField = this.nameField.nativeElement;
  //   let mailField = this.mailField.nativeElement;
  //   let messageField = this.messageField.nativeElement;
  //   let sendBtn = this.sendBtn.nativeElement;

  //   let formData = new FormData();
  //   formData.append('name', nameField.value);
  //   formData.append('email', mailField.value);
  //   formData.append('message', messageField.value);

  //   try {
  //     // senden Daten per Post request an folgende URL
  //     let response = await fetch('https://sarah-zimmermann-schmutzler.developerakademie.net/send_mail_portfolio/send_mail.php',
  //       {
  //         method: 'POST',
  //         body: formData
  //       })
  //     if (!response.ok)
  //       throw response;
  //   } catch (error) { console.log(error) }
  // }


  // Funktion von Junus
  // async sendMail() {
  //   console.log('Sending mail', this.myForm);
  //   // holen uns die Elemente
  //   // this.nameField.nativeElement = getElementById
  //   let nameField = this.nameField.nativeElement;
  //   let mailField = this.mailField.nativeElement;
  //   let messageField = this.messageField.nativeElement;
  //   let sendBtn = this.sendBtn.nativeElement;

  //   // disablen solange Sendevorgang
  //   nameField.disabled = true;
  //   mailField.disabled = true;
  //   messageField.disabled = true;
  //   sendBtn.disabled = true;


  //   // Animation anzeigen, dass gerade gesendet wird

  //   // bereiten Daten vor, die wir senden wollen
  //   let formData = new FormData();
  //   formData.append('name', nameField.value);
  //   formData.append('email', mailField.value);
  //   formData.append('message', messageField.value);

  //   // senden Daten per Post request an folgende URL
  //   await fetch('https://sarah-zimmermann-schmutzler.developerakademie.net/send_mail_portfolio/send_mail.php'),
  //   {
  //     method: 'POST',
  //     body: formData
  //   };

  //   // Nachricht anzeigen, dass gesendet

  //   // aktivieren nach Senden
  //   nameField.disabled = false;
  //   mailField.disabled = false;
  //   messageField.disabled = false;
  //   sendBtn.disabled = false;

  // }

}
