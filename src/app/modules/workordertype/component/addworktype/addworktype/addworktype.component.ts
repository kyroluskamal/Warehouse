import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkordertypeService } from 'src/app/shared/services/workordertype/workordertype.service';

@Component({
  selector: 'app-addworktype',
  templateUrl: './addworktype.component.html',
  styleUrls: ['./addworktype.component.scss']
})
export class AddworktypeComponent implements OnInit {
  addWorkType:FormGroup;
  @Output() onAddWorkType = new EventEmitter()
  constructor(private WorkordertypeService:WorkordertypeService, private DialogService:DialogService) { }

  ngOnInit(): void {

    this.addWorkType = new FormGroup({
      WOypeNameAr: new FormControl(null, [Validators.required]),
      WOypeNameEn: new FormControl(null , [Validators.required]),
    });
    }
  
    addData() {
      this.WorkordertypeService.addWorkOrderType(this.addWorkType.value).subscribe((data) => {
        this.addWorkType.reset();
        console.log(data)
        this.DialogService.toggleDisplayDialog(false)
        this.onAddWorkType.emit()
      });
    }

}
