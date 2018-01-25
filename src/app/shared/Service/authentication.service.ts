import { Injectable } from '@angular/core';
import { UserLogin} from '../../Models/UserLogin';
import {CurrentUser} from '../../Models/CurrentUser';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

 private CurrentUser:  CurrentUser;
   subject = new Subject();



  Authenticate(credentials: UserLogin) {
      this.CurrentUser = new CurrentUser();
      this.CurrentUser.Email = credentials.UserName;
      this.CurrentUser.Name =  'Himanshu Parkash';
      console.log(this.CurrentUser);
      setTimeout(() => {
        return  this.subject.next(true);
      }, 1000);

  }

  IsAuthenticate(): Boolean {
    return  !!this.CurrentUser;
  }

  LogOut(){
    this.CurrentUser = null;
  }

  GetUser(): CurrentUser {
    return this.CurrentUser;
  }



}
