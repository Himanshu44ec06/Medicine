import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Medicine} from '../../Models/Medicine';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';



@Injectable()
export class MedicineService {

  constructor(private _http: HttpClient) { }
  private   _productUrl  = './api/medicine/medicine.json';
  private  _medicineList: Medicine[]  =  [];

  private  HandleError(err: HttpErrorResponse) {
    console.log(err);
    return  Observable.throw(err.message);
  }

  GetById(Id: Number): Observable<Medicine> {
      let  medicine: Medicine;
      this._medicineList.forEach((item) => {
          if (item.Id ===  Id) {
              medicine = item;
          }
      });
      return  Observable.of(medicine);
  }

  Get(): Observable<Medicine[]> {

      if (this._medicineList.length >= 1) {
          return Observable.of( this._medicineList );
      } else {
          return this._http.get<Medicine[]>( this._productUrl )
              .do( data => this._medicineList = data )
              .catch( this.HandleError );
      }

  }

  Update(medicine: Medicine): Observable<boolean> {
      this._medicineList.forEach((item) => {
          if (item.Id ===  medicine.Id) {
              item.Expiry =  medicine.Expiry;
              item.Note =  medicine.Note;
              item.Price =  medicine.Price;
              item.Quantity =  medicine.Quantity;
              item.Brand =  medicine.Brand;
              item.Name =  medicine.Name;
          }
      });
      return  Observable.of(true);
  }

  Delete(medicineId: Number): Observable<boolean> {
    var array  = [];
    this._medicineList.forEach((item) => {
      if (item.Id !==  medicineId) {
          array.push(item);
      }
    })

    this._medicineList =  array;
    return  Observable.of(true);
  }

  Add(medicine: Medicine): Observable<boolean> {
      medicine.Id =  this._medicineList.length + 1;
    this._medicineList.push(medicine);
      return  Observable.of(true);

  }



}
