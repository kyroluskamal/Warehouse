import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubservService } from 'src/app/shared/services/subserv/subserv.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { MainserviesService } from 'src/app/shared/services/mainservices/mainservies.service';

@Component({
  selector: 'app-addsubserv',
  templateUrl: './addsubserv.component.html',
  styleUrls: ['./addsubserv.component.scss']
})
export class AddsubservComponent implements OnInit {

  addSubServ:FormGroup;
  @Output() onaddSubServ = new EventEmitter()
  services: any;
  constructor(private SubservService:SubservService, private DialogService:DialogService,private MainserviesService:MainserviesService) { }

  ngOnInit(): void {

    
  /*add form*/
  this.addSubServ = new FormGroup({
    MainServiceId:new FormControl(null , [Validators.required]),
    SubServiceNameAr: new FormControl(null, [Validators.required]),
    SubServiceNameEn: new FormControl(null, [Validators.required]),
    
  });
  this.getMainService()
  }

  addData() {
    this.SubservService.addSubService(this.addSubServ.value).subscribe((data) => {
      this.addSubServ.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onaddSubServ.emit()
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
