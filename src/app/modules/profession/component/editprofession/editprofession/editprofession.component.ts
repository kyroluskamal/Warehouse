import { Component, EventEmitter, OnInit, Output,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessionService } from 'src/app/shared/services/profession/profession.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-editprofession',
  templateUrl: './editprofession.component.html',
  styleUrls: ['./editprofession.component.scss']
})
export class EditprofessionComponent implements OnInit {
  editProfession:FormGroup;
  @Input() professionId:number;
  @Output() onEditProfession = new EventEmitter()
  itemdetails: any;
  constructor(private ProfessionService:ProfessionService, private DialogService:DialogService) { }

  ngOnInit(): void {

    /*add form*/
this.editProfession = new FormGroup({
  ProfessionNameAr: new FormControl(null, [Validators.required]),
  ProfessionNameEn: new FormControl(null, [Validators.required]),
});
}

ngOnChanges(){
  this.getProfessionInfo(this.professionId)
}

getProfessionInfo(id:number) {

  console.log('ddddd',id)
  this.ProfessionService.getAllProfessionById(id).subscribe((result:any)=>{
    
    this.itemdetails = result.Profession;
    this.editProfession.patchValue(this.itemdetails);
    console.log(this.itemdetails)

  })
}
editData() {
  this.ProfessionService.editProfession(this.professionId,this.editProfession.value).subscribe((data) => {
    this.DialogService.toggleDisplayDialog(false)
    this.onEditProfession.emit()
    if (data.Message == 'Created') {
      this.ProfessionService.getAllProfession();
    }
  });
}

}
