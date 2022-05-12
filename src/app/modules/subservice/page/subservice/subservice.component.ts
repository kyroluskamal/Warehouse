import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';
import { SubservService } from 'src/app/shared/services/subserv/subserv.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.scss']
})
export class SubserviceComponent implements OnInit {
  mainService:any[]=[];

  constructor(private dialogService: DialogService , private SubservService:SubservService,
    private MainserviesService:MainserviesService) { }
    arr:any[]=[];
  subservice:any[] = [];
  columns:any[] = ['Id','MainServiceId','SubServiceNameAr', 'SubServiceNameEn'];
  labels:string[]=['Id','Main Service','Sub Service Name Arabic', 'Sub Service Name English']
  isload:boolean = false;
  selectedId: number;
  formType: string;
  ngOnInit(): void {
    
    this.getMainService();
  }
  getSubService(){
    this.SubservService.allSubService().subscribe((result:any)=>{
      console.log(result)
      this.subservice = result.SubService;
      this.isload=true;
      if(this.subservice){
        this.subservice.forEach((ele:any)=>{
          delete ele['ServicePriceLists'];
        })
        this.columns = Object.keys(this.subservice[0])
      }
      
      for(let x = 0; x < this.subservice.length; x++){
        let obj ={
          Id:this.subservice[x].Id,
          SubServiceNameAr:this.subservice[x].SubServiceNameAr,
          SubServiceNameEn:this.subservice[x].SubServiceNameEn,
          MainServiceId:this.filterServiceTypeByID(this.subservice[x].MainServiceId)
        }
        this.arr.push(obj);
      }

      this.subservice = this.arr;
    })
  }
  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.SubservService.deletSubservice(id).subscribe((res)=>{
      this.getSubService();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

  getMainService(){
    this.MainserviesService.getAllservices().subscribe((result:any)=>{
      console.log("Service ",result);
      this.mainService= result.MainServices;
      this.getSubService();
    });
  }

  filterServiceTypeByID(id:any){    
    let serviceName = _.find(this.mainService, function(o) { return o.Id == id; });
    return serviceName?.MainServiceNameEn;
  }
}
