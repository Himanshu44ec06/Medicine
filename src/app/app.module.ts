import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Component/Login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LandingComponent } from './Component/Landing/landing.component';
import {RouterModule} from '@angular/router';
import { TopNavigationComponent } from './Component/Landing/Navigation/top-navigation.component';
import { MedicineTableComponent } from './Component/Landing/medicine-table/medicine-table.component';
import {HttpClientModule} from '@angular/common/http';
import { MedicineDetailComponent } from './Component/Landing/medicine-detail/medicine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    TopNavigationComponent,
    MedicineTableComponent,
    MedicineDetailComponent,

 ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'Login', component: LoginComponent},
      {path: 'Me', component: LandingComponent},
        {path: 'Me/:Id', component: MedicineDetailComponent},
      {path: '', redirectTo : '/Me', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
