import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import * as _ from 'lodash';
import { CityService } from 'src/app/shared/services/city/city.service';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.scss']
})
export class EditclientComponent implements OnInit {
  @Input() clientId:number;
  @Output() onEditClient = new EventEmitter()
  editUser: FormGroup;
  itemdetails:{}
  url: any;
  selectedCity: any;
  cities: any;
  users: any;
  constructor(private ClientService:ClientService, private DialogService:DialogService,
    private UsertypeService:UsertypeService,private CityService:CityService) { }

  ngOnInit(): void {
    
    /*add form*/
this.editUser = new FormGroup({
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
// this.getUserType();
// this.getCities();
this.getClientInfo(this.clientId);
  }

  ngOnChanges()
  {
    // this.getClientInfo(this.clientId);

  }

  getClientInfo(Id:number) {
    console.log(Id)
    this.ClientService.getAllUserById(Id).subscribe((result:any)=>{
      this.itemdetails = result.Users;
      console.log('cllllllllllllllllll',result);
      this.editUser.patchValue(this.itemdetails);
      
    })
  }
  editData() {

    this.ClientService.editUser(this.clientId,this.editUser.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditClient.emit()
      if (data.Message == 'Created') {
        this.ClientService.getAllUser();
      }
      
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
      return this.editUser.get('cityName');
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
      this.editUser.patchValue({
        CityName: this.selectedCity?.CityNameAR,
        CityId: this.selectedCity?.Id,
        CreateDate: new Date(),
        PhotoUrl: '',
        ConfirmPayment: 0,
        IsBlock: false,
      });
    }
}
