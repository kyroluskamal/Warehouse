import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ServicetypeService } from 'src/app/shared/services/servicetype/servicetype.service';
@Component({
  selector: 'app-edtservicetype',
  templateUrl: './edtservicetype.component.html',
  styleUrls: ['./edtservicetype.component.scss']
})
export class EdtservicetypeComponent implements OnInit {
  @Input() serviceTypId:number;
  @Output() onEditService = new EventEmitter()
  editServiceType: FormGroup;
  constructor(private DialogService:DialogService, private ServicetypeService:ServicetypeService) { }
  ngOnInit(): void {
    /*Edit form*/
    this.editServiceType = new FormGroup({
      ServiceTypeNameAr: new FormControl(null, [Validators.required]),
      ServiceTypeNameEn: new FormControl(null , [Validators.required])
    });
    // console.log(this.serviceTypId)
    
  }
  ngOnChanges()
  {

    this.getServicetypeInfo(this.serviceTypId)
  }
  getServicetypeInfo(id:number) {
    console.log(id)
    this.ServicetypeService.serviceTypeById(id).subscribe((result:any)=>{
      this.editServiceType.patchValue(result.ServicePriceList)
      console.log('ddddddd',result)
    })
  }
  editData() {
    this.ServicetypeService.updataserviceType(this.serviceTypId,this.editServiceType.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditService.emit()
      if (data.Message == 'Created') {
        this.ServicetypeService.serviceType();
      }
    });
  }
}
