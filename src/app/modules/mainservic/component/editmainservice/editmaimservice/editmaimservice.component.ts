import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';
import { ServicetypeService } from 'src/app/shared/services/servicetype/servicetype.service';

@Component({
  selector: 'app-editmaimservice',
  templateUrl: './editmaimservice.component.html',
  styleUrls: ['./editmaimservice.component.scss']
})
export class EditmaimserviceComponent implements OnInit {
  @Input() mainserviceId:number;
  @Output() onEditService = new EventEmitter()
  editmainService: FormGroup;
  services: any;
  constructor(private MainserviesService:MainserviesService, private DialogService:DialogService, private ServicetypeService:ServicetypeService) { }

  ngOnInit(): void {

            /*add form*/
  this.editmainService = new FormGroup({
    MainServiceNameAr: new FormControl(null, [Validators.required]),
    MainServiceNameEn: new FormControl(null , [Validators.required]),
    ServiceTypeId: new FormControl(null , [Validators.required]),
    
  });
  this.getServiceType();
  }
  ngOnChanges()
  {
    this.getServicetypeInfo(this.mainserviceId);
  }

  getServicetypeInfo(id:number) {
    console.log(id)
    this.MainserviesService.getAllservicesById(id).subscribe((result:any)=>{
      this.editmainService.patchValue(result.MainServices)
      console.log('ddddddd',result)
    })
  }
  editData() {
    this.MainserviesService.editServices(this.mainserviceId,this.editmainService.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditService.emit()
      if (data.Message == 'Created') {
        this.MainserviesService.getAllservices();
      }
    });
  }

  getServiceType(){
    this.ServicetypeService.serviceType().subscribe((result:any)=>{
      console.log(result)
      this.services = result.ServiceTypes
      // this.selectedCountery=result.Country.CountryNameEn
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
