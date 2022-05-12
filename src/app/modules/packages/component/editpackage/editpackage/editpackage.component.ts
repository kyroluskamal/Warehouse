import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { PackagesService } from 'src/app/shared/services/packages/packages.service';
import { ServicepriceService } from 'src/app/shared/services/service price/serviceprice.service';

@Component({
  selector: 'app-editpackage',
  templateUrl: './editpackage.component.html',
  styleUrls: ['./editpackage.component.scss']
})
export class EditpackageComponent implements OnInit {
  services: any;

  constructor(private PackagesService:PackagesService, private DialogService:DialogService, private ServicepriceService:ServicepriceService) { }
  editPackages:FormGroup;
  @Output() onEditpackages = new EventEmitter()
  itemdetails: any;
  @Input() packageId:number;
  ngOnInit(): void {

              /*add form*/
  this.editPackages = new FormGroup({
    packageNameAr: new FormControl(null, [Validators.required]),
    packageNameEn: new FormControl(null, [Validators.required]),
    Price: new FormControl(null, [Validators.required]),
    DescriptionAr: new FormControl(null, [Validators.required]),
    DescriptionEn: new FormControl(null, [Validators.required]),
    
  });
  }

  ngOnChanges()
{
  this.getPackagesInfo(this.packageId)
}

  getPackagesInfo(id:number) {
    this.PackagesService.getPackagesById(id).subscribe((result:any)=>{
      this.itemdetails = result.Packages;
      this.editPackages.patchValue(this.itemdetails);
      
      console.log(result);
    })
  }
  editData() {
    this.PackagesService.editPackages(this.packageId,this.editPackages.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditpackages.emit()
      if (data.Message == 'Created') {
        this.PackagesService.getPackages();
      }
    });
  }

      // get service arabic

      // getDescriptionAr() {
      //   this.ServicepriceService.servicePriceList().subscribe((result: any) => {
      //     console.log(result)
      //     // this.services = result.;
      //   })
      // }
      // selecServicesAr(event: any) {
    
      //   this.getServiceAr(event.target.value)
      // }
    
      // getServiceAr(Id: number) {
      //   this.ServicepriceService.getservicePriceListById(Id).subscribe((result: any) => {
      //     console.log(result)
      //   })
      // }
  
      // get service english
  
      // getDescriptionEn() {
      //   this.ServicepriceService.servicePriceList().subscribe((result: any) => {
      //     console.log(result);
      //     this.services = result;
      //   })
      // }
      // selecServicesEn(event: any) {
    
      //   this.getServiceEn(event.target.value)
      // }
    
      // getServiceEn(Id: number) {
      //   this.ServicepriceService.getservicePriceListById(Id).subscribe((result: any) => {
      //     console.log(result);
      //   })
      // }

}
