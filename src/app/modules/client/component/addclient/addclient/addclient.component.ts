import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import * as _ from 'lodash';
import { CityService } from 'src/app/shared/services/city/city.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  users: any;
  url: string = '';
  cities: any;
  selectedCity: any;
  constructor(private ClientService:ClientService, private DialogService:DialogService,
     private UsertypeService:UsertypeService,private CityService:CityService) { }
  addUser:FormGroup;
  @Output() onaddClient = new EventEmitter()
  ngOnInit(): void {

    /*add form*/
this.addUser = new FormGroup({
  UserTypeId: new FormControl(null, [Validators.required]),
  UserName: new FormControl(null, [Validators.required]),
  Mobile: new FormControl(null, [Validators.required]),
  Email: new FormControl(null, [Validators.required]),
  PhotoUrl: new FormControl(null, [Validators.required]),
  CityName: new FormControl(null, [Validators.required]),
  CityId: new FormControl(null, [Validators.required]),
  // ConfirmPayment: new FormControl(null, [Validators.required]),
  // IsBlock: new FormControl(null, [Validators.required]),
  ConfirmPayment: new FormControl(0),
  IsBlock: new FormControl(false),
  CreateDate: new FormControl(null, [Validators.required]),
  
});
this.getUserType();
this.getCities();
}

addData() {
  this.setFormValue();
  this.ClientService.addUser(this.addUser.value).subscribe((data) => {
    this.addUser.reset();
    console.log(data)
    this.DialogService.toggleDisplayDialog(false)
    this.onaddClient.emit()
    
  });
}
  // get user type

  getUserType(){
    this.UsertypeService.getUser().subscribe((result:any)=>{
      console.log(result)
      this.users = result.UserTypes;
    })
  }

  selectClient(event:any){

    this.getClientById(event.target.value)
  }

  getClientById(Id:number){
    this.ClientService.getAllUserById(Id).subscribe((result:any)=>{
      console.log(result)
      // console.log(result.Country['City'])
      // this.Cities = result.Country['City']
    })
  }
 // ==============select photo=========
  onselectfile(e: any) {
    console.log(e.target.files[0]);
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

    // sellect countery
    changeCity(e: any) {
      console.log(e.target);
      this.CityName?.setValue(e.target.value.cityNameAR);
    }
  
    get CityName() {
      return this.addUser.get('cityName');
    }
    getCities() {
      this.CityService.getCities().subscribe((result: any) => {
        console.log(result);
        this.cities = result.Cities;
      });
    }
    getSelectedCityId(cityId: any) {
      this.getCityById(cityId.target.value);
      console.log(cityId.target.value)
    }
    getCityById(cityId: number) {
      this.CityService.getCityById(cityId).subscribe((result: any) => {
        this.selectedCity = result.City;
        console.log(this.selectedCity)
      });
    }

    setFormValue() {
      this.addUser.patchValue({
        CityName: this.selectedCity?.CityNameAR,
        CityId: this.selectedCity?.Id,
        CreateDate: new Date(),
        PhotoUrl: '',
        ConfirmPayment: 0,
        IsBlock: false,
      });
    }

}
