import { Component } from '@angular/core';
import {AuthenticationService} from './shared/Service/authentication.service';
import {MedicineService} from './shared/Service/medicine.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ AuthenticationService, MedicineService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
