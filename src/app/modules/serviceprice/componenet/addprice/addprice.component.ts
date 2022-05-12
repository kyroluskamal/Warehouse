import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ServicepriceService } from 'src/app/shared/services/service price/serviceprice.service';
import { SubservService } from 'src/app/shared/services/subserv/subserv.service';
SubservService
@Component({
  selector: 'app-addprice',
  templateUrl: './addprice.component.html',
  styleUrls: ['./addprice.component.scss']
})
export class AddpriceComponent implements OnInit {
  services:any;
  addPrice:FormGroup;
  @Output() onAddPrice = new EventEmitter()

  constructor(private ServicepriceService:ServicepriceService , private DialogService:DialogService,
     private SubservService:SubservService) { }

  ngOnInit(): void {

    /*add form*/
  this.addPrice = new FormGroup({
    DescriptionAr: new FormControl(null, [Validators.required]),
    DescriptionEn: new FormControl(null),
    SubServiceId: new FormControl(null),
    Price: new FormControl(null),
    Cost: new FormControl(null),
    
  });
  this.getSubService();
  }

  addData() {
    this.ServicepriceService.addServicePrice(this.addPrice.value).subscribe((data) => {
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onAddPrice.emit()
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
