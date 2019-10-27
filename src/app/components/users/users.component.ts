import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = false;
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
        registered: new Date('03/11/2019 10:09:09'),
        isHidden: true
      }, {
        firstName: 'Gulash',
        lastName: 'Suppe',
        age: 24,
        address: {
          street: 'Nagy Janos',
          city: 'Debrecen',
          state: 'Koros'
        },
        registered: new Date('11/08/2019 12:11:09'),
        isHidden: true
      }, {
        firstName: 'Elek',
        lastName: 'Peterfy',
        age: 46,
        address: {
          street: 'utca',
          city: 'Szentendre',
          state: 'Pest'
        },
        isActive: true,
        registered: new Date('11/08/2016 08:11:09'),
        isHidden: true
      }
    ]

    this.showExtended = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  onAddUserClick(event) {
    console.log(event);
  }

  toggleUserHide(user: User) {
    user.isHidden = !user.isHidden;
  }

}
