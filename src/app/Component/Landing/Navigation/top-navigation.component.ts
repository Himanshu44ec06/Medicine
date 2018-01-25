import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../shared/Service/authentication.service';
import {CurrentUser} from '../../../Models/CurrentUser';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  CurrentUser: CurrentUser;
  constructor(private _auth:  AuthenticationService,
              private  _router: Router
              ) { }

  LogOut() {
    this._auth.LogOut();
    this._router.navigate(['/Login']);

  }

  ngOnInit() {

    this.CurrentUser =  this._auth.GetUser();
  }

}
