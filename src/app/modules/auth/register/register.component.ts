import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CityService } from 'src/app/shared/services/city/city.service';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  cities: any[] = [];
  selectedCity: any;
  error:any;
  flag: boolean = false;

  city: any = [];
  url: string = '';
  users: any;
  selectUseres:any
  constructor(
    private authService: AuthService,
    private cityService: CityService,
    private router: Router,
    private UsertypeService:UsertypeService
  ) {
    // this.authService.cities().subscribe((res) => {
    //   this.city = res.Data.Cities;
    //   console.log(this.city)
    // })
    var token = localStorage.getItem('mytoken');
    if(token)
    {
      this.router.navigate(['/profile'])
    }
  }
  Formregister: FormGroup = new FormGroup({
    UserName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    Password: new FormControl(null, [Validators.required]),
    Mobile: new FormControl(null, [Validators.required]),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    CityId: new FormControl(null, [Validators.required]),
    UserTypeId: new FormControl(null, [Validators.required]),
    ConfirmPayment: new FormControl(0),
    IsBlock: new FormControl(false),
    CityName: new FormControl(null),
    CreateDate: new FormControl(null),
    PhotoUrl: new FormControl(null),
  });

  submiteregister(Formregister: FormGroup) {
    //====>

    this.setFormValue();

    if (Formregister.valid == true) {
      this.authService.register(Formregister.value).subscribe((data) => {
        console.log(data);

        if (data.Message == 'Created') {
          this.router.navigate(['/login']);
        } else {
          this.flag = true;
        }
      },(error:any)=>{
        console.log(error)
        this.error = error.error.Message
      });
    }

    console.log(Formregister.value);
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
    return this.Formregister.get('cityName');
  }
  ngOnInit(): void {
    this.getCities();
    this.getUsers()
  }

  getCities() {
    this.cityService.getCities().subscribe((result: any) => {
      console.log(result);
      this.cities = result.Cities;
    });
  }
  getSelectedCityId(cityId: any) {
    this.getCityById(cityId.target.value);
    console.log(cityId.target.value)
  }
  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe((result: any) => {
      this.selectedCity = result.City;
      console.log(this.selectedCity)
    });
  }
  setFormValue() {
    this.Formregister.patchValue({
      CityName: this.selectedCity?.CityNameAR,
      CityId: this.selectedCity?.Id,
      CreateDate: new Date(),
      PhotoUrl: '',
      ConfirmPayment: 0,
      UserTypeId: this.selectUseres?.Id,
      IsBlock: false,
    });
  }


  getUsers()
  {
    this.UsertypeService.getUser().subscribe((res)=>{
      this.users=res.UserTypes
    })
  }

  selectUser(event:any){

    this.getUserById(event.target.value)
  }

  getUserById(Id:number){
    this.UsertypeService.getUserById(Id).subscribe((result:any)=>{
      this.selectUseres = result.UserType
      console.log(result)
      // console.log(result.Country['City'])
      // this.Cities = result.Country['City']
    })
  }
}
