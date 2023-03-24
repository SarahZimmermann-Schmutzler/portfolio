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

  async sendMail() {
    console.log('Sending mail', this.myForm);
    // holen uns die Elemente
    // this.nameField.nativeElement = getElementById
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendBtn = this.sendBtn.nativeElement;

    // disablen solange Sendevorgang
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;

    // Animation anzeigen, dass gerade gesendet wird

    // bereiten Daten vor, die wir senden wollen
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', mailField.value);
    formData.append('message', messageField.value);

    // senden Daten per Post request an folgende URL
    await fetch('https://sarah-zimmermann-schmutzler.developerakademie.net/send_mail_portfolio/send_mail.php'),
    {
      method: 'POST',
      body: formData
    };

    // Nachricht anzeigen, dass gesendet
    
    // aktivieren nach Senden
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;

  }
}
