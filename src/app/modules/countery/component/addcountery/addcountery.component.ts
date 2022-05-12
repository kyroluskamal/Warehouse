import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CounteryService } from 'src/app/shared/services/countery/countery.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-addcountery',
  templateUrl: './addcountery.component.html',
  styleUrls: ['./addcountery.component.scss']
})
export class AddcounteryComponent implements OnInit {

  addCountery:FormGroup;
  @Output() onAddCountery = new EventEmitter()

  constructor(private dialogService:DialogService, private CounteryService:CounteryService) { }

  ngOnInit(): void {

        /*add form*/
  this.addCountery = new FormGroup({
    CountryNameAr: new FormControl(null, [Validators.required]),
    CountryNameEn: new FormControl(null),
  });
  }

  addData() {
    this.CounteryService.addNewCountery(this.addCountery.value).subscribe((data) => {
      this.addCountery.reset();
      console.log(data)
      this.dialogService.toggleDisplayDialog(false)
      this.onAddCountery.emit()
    });
  }

}
