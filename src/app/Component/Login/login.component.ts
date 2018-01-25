import { Component, OnInit } from '@angular/core';
import { UserLogin} from '../../Models/UserLogin';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../shared/Service/authentication.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserInput:  UserLogin;
  loginForm:  FormGroup;
  constructor(private  _authenticate: AuthenticationService,
              private  _route: Router
              ) { }

  Subumit(formValue): void {
    this._authenticate.Authenticate(formValue);
    this._route.navigate(['/Me']);
  }


  ngOnInit() {

    let UserName  =  new FormControl();
    let Password = new FormControl();
    this.loginForm =  new FormGroup({
        UserName  :  UserName,
      Password :  Password

    });


  }

}
