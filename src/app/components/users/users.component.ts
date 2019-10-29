import { Component, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('newUserForm') newUserForm: any;

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

  toggleUserHide(user: User) {
    user.isHidden = !user.isHidden;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('User form is not valid!')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.isHidden = true;

      this.users.unshift(value);

      this.newUserForm.reset();
    }
  }

}
