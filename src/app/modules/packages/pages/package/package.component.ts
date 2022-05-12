import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { PackagesService } from 'src/app/shared/services/packages/packages.service';
import { ServicepriceService } from 'src/app/shared/services/service price/serviceprice.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {
  packages:any[] = [];
  columns:any[] = ['Id','packageNameAr','packageNameEn','Price','DescriptionAr','DescriptionEn','Subscriptions'];
  labels:string[]=['Id','package Name Arabic','package Name English','Price','Description Arabic','Description English']
  arr: any[]=[];
  selectedId: number;
  formType: string;
  isload:boolean = false;
  services: any;
  constructor(private PackagesService:PackagesService, private DialogService:DialogService,private ServicepriceService:ServicepriceService) { }

  ngOnInit(): void {
    
    this.getPackage();
    
  }
  getPackage(){
    this.PackagesService.getPackages().subscribe((result:any)=>{
      console.log(result)
      this.packages = result.Packages;
      this.isload=true;
        this.packages.forEach((ele:any)=>{
          delete ele ['Subscriptions']
        })
        this.columns = Object.keys(this.packages[0])
      })


  }
  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.PackagesService.deletePackages(id).subscribe((res)=>{
      this.getPackage();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }


  // get serviceprice
  // getServicePrice()
  // {
  //   this.ServicepriceService.servicePriceList().subscribe((result:any)=>{
  //     console.log(result)
  //     this.services =result.ServicePriceList;
  //     this.getPackage();
  //   })
  // }

  // filterPackages(id:any){    
  //   let servicesName = _.find(this.services, function(o) { return o.Id == id; });
  //   return servicesName?.DescriptionEn;
  // }
  // filterPackagesAr(id:any){    
  //   let servicesNameAr = _.find(this.services, function(o) { return o.Id == id; });
  //   return servicesNameAr?.DescriptionAr;
  // }

}
