import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links=[
    {name:'Accueil',url:'#'},
    {name:'Profil',url:'#profil'},
    {name:'Conférences',url:'#conference-list'},
    {name:'Détail',url:'#conference'},
    {name:'Amis',url:'#amis'},
    {name:'Notifications',url:'#notifications'}
  ]
}
