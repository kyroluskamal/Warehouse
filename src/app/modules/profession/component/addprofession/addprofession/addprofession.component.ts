import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfessionService } from 'src/app/shared/services/profession/profession.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
@Component({
  selector: 'app-addprofession',
  templateUrl: './addprofession.component.html',
  styleUrls: ['./addprofession.component.scss']
})
export class AddprofessionComponent implements OnInit {
  addProfession:FormGroup;
  @Output() onaddProfession = new EventEmitter();
  constructor(private ProfessionService:ProfessionService, private DialogService:DialogService) { }

  ngOnInit(): void {

    /*add form*/
this.addProfession = new FormGroup({
  ProfessionNameAr: new FormControl(null, [Validators.required]),
  ProfessionNameEn: new FormControl(null, [Validators.required]),
});
}

addData() {
this.ProfessionService.addProfession(this.addProfession.value).subscribe((data) => {
  this.addProfession.reset();
  console.log(data)
  this.DialogService.toggleDisplayDialog(false)
  this.onaddProfession.emit()
});
}

}
