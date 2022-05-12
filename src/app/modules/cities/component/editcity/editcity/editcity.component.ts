import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/app/shared/services/city/city.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
CityService
@Component({
  selector: 'app-editcity',
  templateUrl: './editcity.component.html',
  styleUrls: ['./editcity.component.scss']
})
export class EditcityComponent implements OnInit {
  @Input() cityId:number;
  @Output() onEditCity = new EventEmitter()
  editCity: FormGroup;
  itemdetails:{}
  constructor(private CityService:CityService, private DialogService:DialogService) { }

  ngOnInit(): void {
    this.editCity = new FormGroup({
      CityNameAR: new FormControl(null, [Validators.required]),
      CityNameEn: new FormControl(null , [Validators.required]),
      CountryId: new FormControl(null)
    });
  }
  ngOnChanges()
  {
    this.getCityInfo(this.cityId);

  }

  getCityInfo(cityId:number) {
    this.CityService.getCityById(cityId).subscribe((result:any)=>{
      this.itemdetails = result.City;
      console.log(this.editCity);
      this.editCity.patchValue(this.itemdetails);
      console.log(cityId)
    })
  }
  editData() {

    this.CityService.editcity(this.cityId,this.editCity.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditCity.emit()
      if (data.Message == 'Created') {
        this.CityService.getCities();
      }
      
    });
  }

}
