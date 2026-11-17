import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friendslist',
  imports: [FormsModule],
  templateUrl: './friendslist.html',
  styleUrl: './friendslist.css',
})
export class Friendslist {
  friends = [
    { name: 'Ahmed', email: 'Ahmed@esprit.tn' },
    { name: 'Sami', email: 'Sami@esprit.tn' },
    { name: 'Youssef', email: 'Youssef@esprit.tn' }
  ];
}
