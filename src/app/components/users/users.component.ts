import { Component, OnInit, ViewChild } from '@angular/core';

import { UsersService } from '../../services/users.service';

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
  @ViewChild('newUserForm', {static: false}) newUserForm: any;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.isLoaded = true;
    });

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

      this.userService.addUser(value);

      this.newUserForm.reset();
    }
  }

}
