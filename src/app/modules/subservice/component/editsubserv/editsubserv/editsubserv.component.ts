import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubservService } from 'src/app/shared/services/subserv/subserv.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';
@Component({
  selector: 'app-editsubserv',
  templateUrl: './editsubserv.component.html',
  styleUrls: ['./editsubserv.component.scss']
})
export class EditsubservComponent implements OnInit {
  @Input() subserviceId:number;
  @Output() onEditSubService = new EventEmitter()
  editSubServ: FormGroup;
  services: any;
  constructor(private SubservService:SubservService, private DialogService:DialogService,private MainserviesService:MainserviesService) { }

  ngOnInit(): void {

      /*add form*/
  this.editSubServ = new FormGroup({
    MainServiceId:new FormControl(null , [Validators.required]),
    SubServiceNameAr: new FormControl(null, [Validators.required]),
    SubServiceNameEn: new FormControl(null, [Validators.required]),
    
  });
  this. getMainService()
  }

  ngOnChanges()
  {
    this.getSubServiceInfo(this.subserviceId)
  }
  getSubServiceInfo(id:number) {
    console.log(id)
    this.SubservService.subServiceById(id).subscribe((result:any)=>{
      this.editSubServ.patchValue(result.SubService)
      console.log('ddddddd',result)
    })
  }
  editData() {
    this.SubservService.updatSubService(this.subserviceId,this.editSubServ.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditSubService.emit()
      if (data.Message == 'Created') {
        this.SubservService.allSubService();
      }
    });
  }

  getMainService()
  {
    this.MainserviesService.getAllservices().subscribe((res)=>{
      this.services = res.MainServices
      console.log(res)

    })
  }

  selectSubService(event:any)
  {
      this.getserviceById(event.target.value)
  }

  getserviceById(Id:number){
    this.MainserviesService.getAllservicesById(Id).subscribe((result:any)=>{
      console.log(result)
      // this.Cities = result.Country['City']
    })
  }
}
