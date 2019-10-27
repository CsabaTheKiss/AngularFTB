import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  isLoaded: boolean = true;
  isAddNewUserEnabled: boolean = true;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Jhon',
        lastName: 'Doe',
        age: 33,
        address: {
          street: 'utca',
          city: 'Budapest',
          state: 'Budapest'
        },
        image: 'http://lorempixel.com/600/600/people/3'
      }, {
        firstName: 'Gulash',
        lastName: 'Suppe',
        age: 24,
        address: {
          street: 'Nagy Janos',
          city: 'Debrecen',
          state: 'Koros'
        },
        image: 'http://lorempixel.com/600/600/people/2'
      }, {
        firstName: 'Elek',
        lastName: 'Peterfy',
        age: 46,
        address: {
          street: 'utca',
          city: 'Szentendre',
          state: 'Pest'
        },
        image: 'http://lorempixel.com/600/600/people/1'
      }
    ]

    this.showExtended = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
