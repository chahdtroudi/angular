import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Notif } from './components/notif/notif';
import { Profile } from './components/profile/profile';
import { Footer } from './components/footer/footer';
import { Friendslist } from './components/friendslist/friendslist';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Notif,Profile,Footer,Friendslist,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-angular');
}
