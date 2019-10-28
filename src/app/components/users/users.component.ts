import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  newUser: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = false;
  isLoaded: boolean = true;
  isAddNewUserEnabled: boolean = true;
  isUserFormVisible: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'Jhon@gmail.com',
        registered: new Date('03/11/2019 10:09:09'),
        isHidden: true
      }, {
        firstName: 'Gulash',
        lastName: 'Suppe',
        email: 'gulash@gfreemail.com',
        registered: new Date('11/08/2019 12:11:09'),
        isHidden: true
      }, {
        firstName: 'Elek',
        lastName: 'Peterfy',
        email: 'elek@gelekfi.com',
        isActive: true,
        registered: new Date('11/08/2016 08:11:09'),
        isHidden: true
      }
    ]

    this.showExtended = true;
  }

  onSaveUserClick() {
    this.newUser.isActive = true;
    this.newUser.registered = new Date();
    this.users.unshift(this.newUser);

    this.newUser = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  toggleUserHide(user: User) {
    user.isHidden = !user.isHidden;
  }

  onSubmit(event) {
    event.preventDefault();
  }

}
