import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { PriorityService } from 'src/app/shared/services/priority/priority.service';

@Component({
  selector: 'app-addpriority',
  templateUrl: './addpriority.component.html',
  styleUrls: ['./addpriority.component.scss']
})
export class AddpriorityComponent implements OnInit {
  addpriority:FormGroup;
  @Output() onAddPriority = new EventEmitter()
  constructor(private PriorityService:PriorityService,private DialogService:DialogService ) { }

  ngOnInit(): void {
            /*add form*/
  this.addpriority = new FormGroup({
    PriorityNameAr: new FormControl(null, [Validators.required]),
    PriorityNameEn: new FormControl(null),
  });
  }

  addData() {
    this.PriorityService.addpriority(this.addpriority.value).subscribe((data) => {

      this.addpriority.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onAddPriority.emit()
    });
  }

}
