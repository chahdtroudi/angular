import { Component } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.html',
  styleUrl: './notif.css',
})
export class Notif {
  protected readonly messages = [
    'Une nouvelle conférence a été ajoutée.',
    'Les inscriptions au Signals Workshop sont ouvertes.',
  ];

  protected showMessages = false;

  protected toggleMessages(): void {
    this.showMessages = !this.showMessages;
  }
}
