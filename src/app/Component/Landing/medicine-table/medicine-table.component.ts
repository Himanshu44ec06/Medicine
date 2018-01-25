import { Component, OnInit } from '@angular/core';
import {Medicine} from '../../../Models/Medicine';
import {MedicineService} from '../../../shared/Service/medicine.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'pm-medicine-table',
  templateUrl: './medicine-table.component.html',
  styleUrls: ['./medicine-table.component.css']
})
export class MedicineTableComponent implements OnInit {


  MedicineList: Medicine[];
  FilterList: Medicine[];
    SearchString: String;
  constructor(private  _medicineService: MedicineService) { }




  Search(): void {
      if (this.SearchString.length > 2) {
          let array = [];
          const str   =  this.SearchString.toLocaleLowerCase();
          for (let i = 0; i <  this.FilterList.length ; i++) {
              if (this.FilterList[i].Name.toLocaleLowerCase().indexOf(str) !== -1) {
                  array.push(this.FilterList[i]);
              }
          }
          this.FilterList = array;
      }else {
          this.FilterList =  this.MedicineList;
      }

  }

  ngOnInit() {
     this._medicineService.Get().subscribe(s => {
       this.MedicineList = s;
       this.FilterList =  this.MedicineList ;
     },
         error => console.log(error)
         );

  }

}
