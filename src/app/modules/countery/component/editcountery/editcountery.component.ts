import { Component, EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounteryService } from 'src/app/shared/services/countery/countery.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-editcountery',
  templateUrl: './editcountery.component.html',
  styleUrls: ['./editcountery.component.scss']
})
export class EditcounteryComponent implements OnInit {
  @Input() counterytId:number;
  editCountery:FormGroup;
  @Output() onEditCountery = new EventEmitter()
  itemdetails: any;

  constructor(private dialogService:DialogService, private CounteryService:CounteryService) { }

  ngOnInit(): void {

            /*add form*/
  this.editCountery = new FormGroup({
    CountryNameAr: new FormControl(null, [Validators.required]),
    CountryNameEn: new FormControl(null),
  });

  }
  ngOnChanges(){
    this.getTicketInfo(this.counterytId)
  }

  getTicketInfo(id:number) {

    console.log('ddddd',id)
    this.CounteryService.getCountryById(id).subscribe((result:any)=>{
      
      this.itemdetails = result.Country
      this.editCountery.patchValue(this.itemdetails);
      console.log(this.itemdetails)

    })
  }
  editData() {
    this.CounteryService.editCountery(this.counterytId,this.editCountery.value).subscribe((data) => {
      this.dialogService.toggleDisplayDialog(false)
      this.onEditCountery.emit()
      if (data.Message == 'Created') {
        this.CounteryService.getAllCountery();
      }
    });
  }

}
