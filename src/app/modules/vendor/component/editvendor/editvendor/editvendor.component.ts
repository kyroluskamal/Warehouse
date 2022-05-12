import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorService } from 'src/app/shared/services/vendor/vendor.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.scss']
})
export class EditvendorComponent implements OnInit {

  @Input() vendortId:number;
  editVendor:FormGroup;
  @Output() onEditVendor = new EventEmitter()
  itemdetails: any;
  constructor(private DialogService:DialogService, private VendorService:VendorService) { }

  ngOnInit(): void {

        /*add form*/
this.editVendor = new FormGroup({
  vendorNameAr: new FormControl(null, [Validators.required]),
  vendorNameEn: new FormControl(null, [Validators.required]),
  Phone: new FormControl(null, [Validators.required]),
  Email: new FormControl(null, [Validators.required]),
  Address: new FormControl(null, [Validators.required]),
  Notes: new FormControl(null, [Validators.required]),
});
}

ngOnChanges(){
  this.getVendorInfo(this.vendortId)
}

getVendorInfo(id:number) {

  console.log('ddddd',id)
  this.VendorService.getVendorById(id).subscribe((result:any)=>{
    console.log('ddddddddddd',result)
    this.itemdetails = result.vendor;
    this.editVendor.patchValue(this.itemdetails);
    console.log(this.itemdetails)

  })
}
editData() {
  this.VendorService.updataVendor(this.vendortId,this.editVendor.value).subscribe((data) => {
    this.DialogService.toggleDisplayDialog(false)
    this.onEditVendor.emit()
    if (data.Message == 'Created') {
      this.VendorService.getVendor();
    }
  });
}

}
