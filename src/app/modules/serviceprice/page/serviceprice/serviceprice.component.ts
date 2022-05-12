import { Component, OnInit } from '@angular/core';
import { ServicepriceService } from 'src/app/shared/services/service price/serviceprice.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import * as _ from 'lodash';
import { SubservService } from 'src/app/shared/services/subserv/subserv.service';

@Component({
  selector: 'app-serviceprice',
  templateUrl: './serviceprice.component.html',
  styleUrls: ['./serviceprice.component.scss']
})
export class ServicepriceComponent implements OnInit {
  serviceprice:any[] = [];
  columns:any[] = ['Id','SubServiceId','DescriptionAr','DescriptionEn','Price','Cost'];
  labels:string[]=['Id','Sub Service','Description Arabic','Description English','Price','Cost']

  selectedId: number;
  formType: string;
  isload:boolean = false;
  subService:any[] = [];
  arr:any[]=[];
  constructor(private ServicepriceService:ServicepriceService, private dialogService: DialogService, private SubservService:SubservService) { }

  ngOnInit(): void {
    // this.getserviceprice()
    this.getSubServ();
  }
  getserviceprice(){
    this.ServicepriceService.servicePriceList().subscribe((result:any)=>{
      console.log(result);
      this.isload=true;
      this.serviceprice = result.ServicePriceList
      if(this.serviceprice)
      {
        this.serviceprice.forEach((ele:any)=>{
          delete ele ['Tasks']
      })
      this.columns = Object.keys(this.serviceprice[0])
      }
      
      this.arr=[]
    for(let x = 0; x < this.serviceprice.length; x++){
      let obj ={
        Id:this.serviceprice[x].Id,
        DescriptionAr:this.serviceprice[x].DescriptionAr,
        DescriptionEn:this.serviceprice[x].DescriptionEn,
        Price:this.serviceprice[x].Price,
        Cost:this.serviceprice[x].Cost,
        SubServiceId:this.filterServiceByID(this.serviceprice[x].SubServiceId),

      }
      this.arr.push(obj);
    }
    this.serviceprice = this.arr;
  })
  }

  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }
  deleteRow(id:number){
    this.ServicepriceService.deletservicePriceList(id).subscribe((res)=>{
      this.getserviceprice();
    })
    
  }


  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

  getSubServ(){
    this.SubservService.allSubService().subscribe((result:any)=>{
      console.log("Service Types",result);
      this.subService= result.SubService;
      this.getserviceprice()
    });
  }

  filterServiceByID(id:any){    
    let serviceName = _.find(this.subService, function(o) { return o.Id == id; });
    return serviceName?.SubServiceNameAr;
  }
}
