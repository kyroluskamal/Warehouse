import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';
import { ServicetypeService } from 'src/app/shared/services/servicetype/servicetype.service';
MainserviesService
@Component({
  selector: 'app-addservicetype',
  templateUrl: './addservicetype.component.html',
  styleUrls: ['./addservicetype.component.scss']
})
export class AddservicetypeComponent implements OnInit {
  addServiceType:FormGroup;
  @Output() onAddServiceType = new EventEmitter()
  services: any;
  constructor(private ServicetypeService:ServicetypeService, private DialogService:DialogService,private MainserviesService:MainserviesService) { }

  ngOnInit(): void {
    /*add form*/
  this.addServiceType = new FormGroup({
    ServiceTypeNameAr: new FormControl(null, [Validators.required]),
    ServiceTypeNameEn: new FormControl(null , [Validators.required]),
    MainServiceId: new FormControl(null , [Validators.required]),

  });
  }

  addData() {
    this.ServicetypeService.addServiceType(this.addServiceType.value).subscribe((data) => {
      this.addServiceType.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onAddServiceType.emit()
    });
  }

  getmainservvices(){
    this.MainserviesService.getAllservices().subscribe((result:any)=>{
      console.log(result)
      this.services =result.MainServices
      // this.selectedCountery=result.Country.CountryNameEn
    })
  }
  selectServices(event:any){
    this.getServiceById(event.target.value)
    console.log(event.target.value)

  }

  getServiceById(serviceId:number){
    this.MainserviesService.getAllservicesById(serviceId).subscribe((result:any)=>{
      console.log(result)
      // console.log(result.Country['City'])
      // this.Cities = result.Country['City']
    })
  }

}
