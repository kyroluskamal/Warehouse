import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/shared/services/city/city.service';
import { CounteryService } from 'src/app/shared/services/countery/countery.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import * as _ from 'lodash';
ActivatedRoute
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  Countries:any[] = [];
  Cities:any[]=[]
  columns:any[] = ['Id','CityNameAR','CityNameEn','CountryId'];
  labels:string[]=['Id','City Name Arabic','City Name English','Countery Name']
  selectedCountery:any;
  selectedId: number;
  formType: string;
  itemdetails: any;
  arr: any[]=[];

  isload:boolean = false;
  constructor(private cityService:CityService,
    private dialogService:DialogService,
    private countryService:CounteryService, private ActivatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getCountries()
    
  }

  getCity(){
    this.cityService.getCities().subscribe((result:any)=>{
      this.Cities = result.Cities;
      this.isload=true;
      this.arr=[]
      if(this.Cities)
      {
        this.Cities.forEach((ele:any)=>{
          delete ele['Users'];
        })
        this.columns = Object.keys(this.Cities[0])
      }

    for(let x = 0; x < this.Cities.length; x++){
      let obj ={
        Id:this.Cities[x].Id,
        CityNameAR:this.Cities[x].CityNameAR,
        CityNameEn:this.Cities[x].CityNameEn,
        CountryId:this.filterCountery(this.Cities[x].CountryId)
      }
      this.arr.push(obj);
    }
    this.Cities = this.arr;
  })
  }
  
  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);

    // this.cityService.getCityById(this.selectedId).subscribe((res)=>{
    //   console.log(res)
    //   this.itemdetails = res.City
    //   console.log(this.itemdetails)
    // })
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.cityService.deletecity(id).subscribe((res)=>{
      this.getCity();
    })
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

  getCountries(){
    this.countryService.getAllCountery().subscribe((result:any)=>{
      console.log(result.Country)
      this.Countries = result.Country;
      this.getCity();
    })
  }

  filterCountery(id:any){    
    let counteryName = _.find(this.Countries, function(o) { return o.Id == id; });
    return counteryName?.CountryNameEn;
  }


  // editRow(id:number){
  //   this.dialogService.toggleDisplayDialog(true)
  //   // this.cityService.editcity(data , id).subscribe((result)=>{
  //   //   console.log('edit id : ',id)
  //   // })
  //   console.log('edit id : ',id)
  // }
  // deleteRow(id:number){
  //   this.dialogService.toggleDisplayDialog(true)
  //   // this.cityService.deletecity(id).subscribe((res)=>{
  //   //   this.getCities();
  //   // })

  // }
  // getCountries(){
  //   this.countryService.getAllCountery().subscribe((result:any)=>{
  //     console.log(result.Country)
  //     this.Countries =result.Country

  //   })
  // }
  // selectCountry(event:any){
  //   this.getCountryById(event.target.value)

  // }
  // getCountryById(countryId:number){
  //   this.countryService.getCountryById(countryId).subscribe((result:any)=>{
  //     console.log(result.Country['City'])
  //     this.Cities = result.Country['City']
  //   })
  // }
}
