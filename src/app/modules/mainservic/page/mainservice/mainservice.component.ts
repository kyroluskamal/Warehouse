import { Component, OnInit } from '@angular/core';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ServicetypeService } from 'src/app/shared/services/servicetype/servicetype.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-mainservice',
  templateUrl: './mainservice.component.html',
  styleUrls: ['./mainservice.component.scss']
})
export class MainserviceComponent implements OnInit {
  services:any[] = [];
  columns:any[] = ['Id', 'ServiceTypeId', 'MainServiceNameAr' , 'MainServiceNameEn'];
  labels:string[]=['Id','service type','Main Service Name Arabic','Main Service Name English']
  selectedServiceType:any;
  selectedId: number;
  formType: string;
  isload:boolean = false;
  serviceTypes:any[] = [];
  arr:any[]=[];
  constructor(private MainserviesService:MainserviesService , private DialogService:DialogService,private serviceTypeService:ServicetypeService) { }

  ngOnInit(): void {
    this.getServiceTypes();
  }


  getService(){
    this.MainserviesService.getAllservices().subscribe((result:any)=>{
      console.log(result)
      this.services = result.MainServices;
      this.isload=true;
      if(this.services ){
        this.services.forEach((ele:any)=>{
          delete ele['SubServices']
        })     
        this.columns = Object.keys(this.services[0])
      }
      this.arr=[];
      for(let x = 0; x < this.services.length; x++){
        let obj ={
          Id:this.services[x].Id,
          MainServiceNameAr:this.services[x].MainServiceNameAr,
          MainServiceNameEn:this.services[x].MainServiceNameEn,
          ServiceTypeId:this.filterServiceTypeByID(this.services[x].ServiceTypeId)
        }
        this.arr.push(obj);
      }

      this.services = this.arr;

    })
  }

  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ',id)
  }

  deleteRow(id:number){
    this.selectedId = id;
    this.MainserviesService.deleteServices(id).subscribe((res)=>{
      this.getService();
    })
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }

  getServiceTypes(){
    this.serviceTypeService.serviceType().subscribe((result:any)=>{
      console.log("Service Types",result);
      this.serviceTypes= result.ServiceTypes;
      this.getService();
    });
  }

  filterServiceTypeByID(id:any){    
    let serviceName = _.find(this.serviceTypes, function(o) { return o.Id == id; });
    return serviceName?.ServiceTypeNameAr;
  }

}
