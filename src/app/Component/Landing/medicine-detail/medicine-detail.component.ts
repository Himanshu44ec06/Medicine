import { Component, OnInit } from '@angular/core';
import {Medicine} from '../../../Models/Medicine';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {MedicineService} from '../../../shared/Service/medicine.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'pm-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.css']
})
export class MedicineDetailComponent implements OnInit {

    medicine: Medicine;
    formDisable: Boolean = true;
    IsNew: Boolean = false;
    constructor(private  _router:  ActivatedRoute,
              private  _route: Router,
              private   _medicineService: MedicineService
              ) { }

   medicineForm:  FormGroup;

    Add(formValue) {
        this.medicine = {
            Name : formValue.MedicineName,
            Brand: formValue.MedicineBrand,
            Quantity: formValue.MedicineQuantity,
            Price: formValue.MedicinePrice,
            Note: formValue.MedicineNote,
            Expiry: formValue.MedicineExpiry,
            Id : 0
        };
        this._medicineService.Add(this.medicine).subscribe(
            (s) => {
                this.Back();
            },
            (err) => {
            console.log(err);
            });

    }

    Update(formValue) {
      this.medicine = {
          Name : formValue.MedicineName,
          Brand: formValue.MedicineBrand,
          Quantity: formValue.MedicineQuantity,
          Price: formValue.MedicinePrice,
          Note: formValue.MedicineNote,
          Expiry: formValue.MedicineExpiry,
          Id : this.medicine.Id

      };
      this._medicineService.Update(this.medicine).subscribe(
          (s) => {
            if (s) {
                this.Cancel();
                this.loadData(this.medicine.Id);
            }
          },
          (err) => { console.log(err); });

    }
    Back() {
        this._route.navigate( ['/Me'] );
    }

    Edit() {
        this.formDisable =  false;
       this.medicineForm.enable();
    }

    Cancel() {
        this.formDisable =  true;
       this.medicineForm.disable();
    }



  ngOnInit() {
    const medicineId =  +this._router.snapshot.paramMap.get('Id');
    if (medicineId > 0) {
        this.loadData( medicineId );
    }else {
       this.newData();
    }

  }

  newData(): void {
      this.medicineForm = new FormGroup({
          MedicineName: new FormControl(),
          MedicineBrand: new FormControl(),
          MedicineQuantity: new FormControl(),
          MedicinePrice: new FormControl(),
          MedicineExpiry: new FormControl(),
          MedicineNote: new FormControl(),

      });
      this.IsNew =  true;
  }

  loadData(medicineId): void {
      this._medicineService.GetById(medicineId).subscribe((med) => {
              if (!med) {
                  this._route.navigate( ['/Me'] );
              }else {

                  this.medicine =  med;
                  this.medicineForm = new FormGroup({
                      MedicineName: new FormControl(this.medicine.Name),
                      MedicineBrand: new FormControl(this.medicine.Brand),
                      MedicineQuantity: new FormControl(this.medicine.Quantity),
                      MedicinePrice: new FormControl(this.medicine.Quantity),
                      MedicineExpiry: new FormControl(this.medicine.Expiry),
                      MedicineNote: new FormControl(this.medicine.Note),

                  });
                  this.medicineForm.disable();
              }

          },
          (err) => { console.log(err); }
      );

  }

}
