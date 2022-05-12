import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from 'src/app/shared/services/city/city.service';
import { CounteryService } from 'src/app/shared/services/countery/countery.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {
  addCity:FormGroup;
  @Output() onaddCity = new EventEmitter()
  Countries: any;
  Cities: any;
  selectedCountery:String;
  constructor(private CityService:CityService , private DialogService:DialogService , private CounteryService:CounteryService) { }

  ngOnInit(): void {

      /*add form*/
  this.addCity = new FormGroup({
    CityNameAR: new FormControl(null, [Validators.required]),
    CityNameEn: new FormControl(null, [Validators.required]),
    CountryId: new FormControl(null)
  });
  this.getCountries()
  }

  addData() {
    this.CityService.addCity(this.addCity.value).subscribe((data) => {
      this.addCity.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onaddCity.emit()
      
    });
  }

    getCountries(){
    this.CounteryService.getAllCountery().subscribe((result:any)=>{
      console.log(result.Country)
      this.Countries =result.Country
      // this.selectedCountery=result.Country.CountryNameEn
    })
  }
  selectCountry(event:any){

    this.getCountryById(event.target.value)
  }

  getCountryById(countryId:number){
    this.CounteryService.getCountryById(countryId).subscribe((result:any)=>{
      console.log(result.Country['City'])
      this.Cities = result.Country['City']
    })
  }

}
