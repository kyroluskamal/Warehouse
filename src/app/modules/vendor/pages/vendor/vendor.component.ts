import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/shared/services/vendor/vendor.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendor:any[] = [];
  columns:any[] = ['Id','vendorNameAr','vendorNameEn','Phone','Email','Address','Notes','PurchaseOrders'];
  labels:string[]=['Id','vendor Name Arabic','vendor Name English','Phone','Email','Address','Notes']

  selectedId: number;
  formType: string;
  vendorId:number;
  isload:boolean = false;
  constructor(private DialogService:DialogService, private VendorService:VendorService) { }

  ngOnInit(): void {
    this.getVendor();
  }


  getVendor(){
    this.VendorService.getVendor().subscribe((result:any)=>{
      console.log(result)
      this.vendor = result.Vendors;
      this.isload=true;
      this.vendor.forEach((ele:any)=>{
        delete ele ['PurchaseOrders']
      })
      this.columns = Object.keys(this.vendor[0])
      console.log(this.columns)
    })
  }

  editRow(id:number){

    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.VendorService.deletVendor(id).subscribe((res)=>{
      this.getVendor();
    })

  }

}
