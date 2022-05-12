import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VendorService } from 'src/app/shared/services/vendor/vendor.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.scss']
})
export class AddvendorComponent implements OnInit {
  addVendor:FormGroup;
  @Output() onaddVendor = new EventEmitter()
  constructor(private DialogService:DialogService, private VendorService:VendorService) { }

  ngOnInit(): void {

    /*add form*/
this.addVendor = new FormGroup({
  vendorNameAr: new FormControl(null, [Validators.required]),
  vendorNameEn: new FormControl(null, [Validators.required]),
  Phone: new FormControl(null, [Validators.required]),
  Email: new FormControl(null, [Validators.required]),
  Address: new FormControl(null, [Validators.required]),
  Notes: new FormControl(null, [Validators.required]),
});
}

addData() {
  this.VendorService.addVendor(this.addVendor.value).subscribe((data) => {
    this.addVendor.reset();
    console.log(data)
    this.DialogService.toggleDisplayDialog(false)
    this.onaddVendor.emit()
  });
}

}
