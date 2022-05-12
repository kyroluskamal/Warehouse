import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkorderService } from 'src/app/shared/services/workorder/workorder.service';

@Component({
  selector: 'app-addwork',
  templateUrl: './addwork.component.html',
  styleUrls: ['./addwork.component.scss']
})
export class AddworkComponent implements OnInit {
  addWork:FormGroup;
  @Output() onAddWork = new EventEmitter()
  constructor(private dialogService:DialogService, private WorkorderService:WorkorderService) { }

  ngOnInit(): void {
        /*add form*/
  this.addWork = new FormGroup({
    StatusNameAr: new FormControl(null, [Validators.required]),
    StatusNameEn: new FormControl(null, [Validators.required]),
    
  });
  }

  addData() {
    this.WorkorderService.addWorkOrderStatus(this.addWork.value).subscribe((data) => {
      console.log(data)
      this.dialogService.toggleDisplayDialog(false)
      this.onAddWork.emit()
    });
  }
}
