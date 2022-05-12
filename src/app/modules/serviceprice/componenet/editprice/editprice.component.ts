import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ServicepriceService } from 'src/app/shared/services/service price/serviceprice.service';
import { SubservService } from 'src/app/shared/services/subserv/subserv.service';

@Component({
  selector: 'app-editprice',
  templateUrl: './editprice.component.html',
  styleUrls: ['./editprice.component.scss']
})
export class EditpriceComponent implements OnInit {
  @Input() serviceTypId:number;
  @Output() oneditprice = new EventEmitter()
  editPrice: FormGroup;
  services: any;
  constructor(private ServicepriceService:ServicepriceService , private DialogService:DialogService, private SubservService:SubservService) { }

  ngOnInit(): void {

    this.editPrice = new FormGroup({
      DescriptionAr: new FormControl(null, [Validators.required]),
      DescriptionEn: new FormControl(null),
      SubServiceId: new FormControl(null),
      Price: new FormControl(null),
      Cost: new FormControl(null),
      
    });
    this.getSubService();
  }

  ngOnChanges()
  {

    this.getServicePriceInfo(this.serviceTypId)
  }
  getServicePriceInfo(id:number) {
    console.log(id)
    this.ServicepriceService.getservicePriceListById(id).subscribe((result:any)=>{
      this.editPrice.patchValue(result.ServicePriceList)
      console.log('pppp',result)
    })
  }
  editData() {
    this.ServicepriceService.updataservicePriceList(this.serviceTypId,this.editPrice.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.oneditprice.emit()
      if (data.Message == 'Created') {
        this.ServicepriceService.servicePriceList();
      }
    });
  }

  getSubService()
  {
    this.SubservService.allSubService().subscribe((res)=>{
      this.services = res.SubService
      console.log(res)

    })
  }

  selectSubService(event:any)
  {
      this.getserviceById(event.target.value)
  }

  getserviceById(Id:number){
    this.ServicepriceService.getservicePriceListById(Id).subscribe((result:any)=>{
      console.log(result)
      // this.Cities = result.Country['City']
    })
  }

}
