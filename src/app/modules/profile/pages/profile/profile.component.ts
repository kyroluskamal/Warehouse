import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { CityService } from 'src/app/shared/services/city/city.service';
import { UserService } from 'src/app/shared/services/user/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userid!: number;
  cities:any[] = []
  imageSrc: any = '../../../../../assets/img/user.png';
  user:any;
  formData:FormData = new FormData()
  selectedCity: any;
  constructor(private userService: UserService,private cityService:CityService,private router:Router) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      UserName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      Mobile: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      PhotoUrl: new FormControl('', [Validators.required]),
      CityId: new FormControl('', [Validators.required]),
      CityName: new FormControl(''),
      // Password: new FormControl(''),
    });
    this.userid = JSON.parse(localStorage.getItem('myid') || '');
    this.getUserById(this.userid)
    this.getCities()


  }
  readURL(event: any): void {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      console.log(this.imageSrc);
      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };

      this.formData.append('PhotoUrl', file);
      reader.readAsDataURL(file);
    }
  }
  getUserById(userId:number){
    this.userService.getUserById(userId).subscribe((res: any) => {
      console.log(res)
      this.user = res.Users
      this.profileForm.patchValue(res.Users)
    });
  }
  getCities(){
    this.cityService.getCities().subscribe((result:any)=>{
      this.cities = result.Cities
    })
  }

  deleteUser(userId:number){
    this.userService.deleteUser(userId).subscribe((result:any)=>{
      console.log(result)
      localStorage.removeItem('mytoken')
      this.router.navigate(['/login'])
    },(error:any)=>{
      console.log(error)
    })
  }
  getSelectedCityId(cityId: any) {
    this.getCityById(cityId.target.value);
  }
  getCityById(cityId: number) {
    this.cityService.getCityById(cityId).subscribe((result: any) => {
      this.selectedCity = result.City;
    });
  }
  submit() {
    console.log(this.user)
    console.log(this.user?.PasswordHash)
    console.log(this.user?.UserTypeId)
    this.formData.append('UserName',this.profileForm?.get('UserName')?.value)
    this.formData.append('Mobile',this.profileForm?.get('Mobile')?.value)
    this.formData.append('Email',this.profileForm?.get('Email')?.value)
    this.formData.append('CityId',this.profileForm?.get('CityId')?.value)
    this.formData.append('CityName',this.profileForm?.get('CityName')?.value)
    this.formData.append('PasswordHash',this.user?.PasswordHash)
    this.formData.append('PasswordSalt',this.user?.PasswordSalt)
    this.formData.append('ConfirmPayment',this.user?.ConfirmPayment)
    this.formData.append('IsBlock',this.user?.IsBlock)
    this.formData.append('CreateDate',this.user?.CreateDate)
    this.formData.append('UserTypeId',this.user?.UserTypeId)
    this.userService.updateUser(this.userid,this.formData).subscribe((result:any)=>{
      console.log(result)
    })

  }

}
