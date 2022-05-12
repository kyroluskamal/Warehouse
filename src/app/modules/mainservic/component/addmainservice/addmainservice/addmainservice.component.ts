import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';
import { ServicetypeService } from 'src/app/shared/services/servicetype/servicetype.service';
ServicetypeService
@Component({
  selector: 'app-addmainservice',
  templateUrl: './addmainservice.component.html',
  styleUrls: ['./addmainservice.component.scss']
})
export class AddmainserviceComponent implements OnInit {
  addmainService:FormGroup;
  @Output() onAddMainService = new EventEmitter()
  services: any;
  constructor(private MainserviesService:MainserviesService, private DialogService:DialogService, private ServicetypeService:ServicetypeService) { }

  ngOnInit(): void {

        /*add form*/
  this.addmainService = new FormGroup({
    MainServiceNameAr: new FormControl(null, [Validators.required]),
    MainServiceNameEn: new FormControl(null , [Validators.required]),
    ServiceTypeId: new FormControl(null , [Validators.required]),
    
  });
  this.getServiceType()
  }
  addData() {
    this.MainserviesService.addNewServices(this.addmainService.value).subscribe((data) => {
      this.addmainService.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onAddMainService.emit()
    });
  }

  
  getServiceType(){
    this.ServicetypeService.serviceType().subscribe((result:any)=>{
      console.log(result)
      this.services = result.ServiceTypes
    })
  }
  selectServices(event:any){
    this.getServiceById(event.target.value)
    console.log(event.target.value)

  }

  getServiceById(serviceId:number){
    this.ServicetypeService.serviceTypeById(serviceId).subscribe((result:any)=>{
      console.log(result)
      // console.log(result.Country['City'])
      // this.Cities = result.Country['City']
    })
  }

}
