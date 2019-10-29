import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[];

  constructor() {
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
   }

   getUsers(): User[] {
     return this.users;
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
