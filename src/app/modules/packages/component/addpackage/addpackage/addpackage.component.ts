import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { PackagesService } from 'src/app/shared/services/packages/packages.service';
import { ServicepriceService } from 'src/app/shared/services/service price/serviceprice.service';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.scss']
})
export class AddpackageComponent implements OnInit {
  addPackages:FormGroup;
  @Output() onaddPackages = new EventEmitter();
  servicesAr:any;
  servicesEn:any;
  constructor(private PackagesService:PackagesService, private DialogService:DialogService, private ServicepriceService:ServicepriceService) { }

  ngOnInit(): void {

          /*add form*/
  this.addPackages = new FormGroup({
    packageNameAr: new FormControl(null, [Validators.required]),
    packageNameEn: new FormControl(null, [Validators.required]),
    Price: new FormControl(null, [Validators.required]),
    DescriptionAr: new FormControl(null, [Validators.required]),
    DescriptionEn: new FormControl(null, [Validators.required]),
    
  });
  // this.getDescriptionAr();
  // this.getDescriptionEn();
  }

  addData() {
    this.PackagesService.addPackages(this.addPackages.value).subscribe((data) => {
      this.addPackages.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onaddPackages.emit()
    });
  }

    // get service arabic

    // getDescriptionAr() {
    //   this.ServicepriceService.servicePriceList().subscribe((result: any) => {
    //     console.log('iiiiiiiiiiiiiiii',result)
    //     this.servicesAr = result.ServicePriceList[0].DescriptionAr;
    //     // result.servicrPriceList.map(DescriptionAr=>{console.log(DescriptionAr)})
    //     console.log('ooo',this.servicesAr)
    //     // this.servicesEn = result.DescriptionEn;

        

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

    // // get service english

    // getDescriptionEn() {
    //   this.ServicepriceService.servicePriceList().subscribe((result: any) => {
    //     console.log(result);
    //     // this.services = result.;
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
