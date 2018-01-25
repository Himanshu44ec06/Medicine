import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/Service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private  _auth: AuthenticationService,
              private  _router: Router
              ) { }

  ngOnInit() {
    if ( !this._auth.IsAuthenticate()) {
            this._router.navigate(['/Login']);
    }
  }

}
