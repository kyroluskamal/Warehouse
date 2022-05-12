import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { UnitService } from 'src/app/shared/services/unit/unit.service';

@Component({
  selector: 'app-addunit',
  templateUrl: './addunit.component.html',
  styleUrls: ['./addunit.component.scss']
})
export class AddunitComponent implements OnInit {
  addUnit:FormGroup;
  @Output() onAddUnit = new EventEmitter()
  constructor(private UnitService:UnitService, private DialogService:DialogService) { }

  ngOnInit(): void {
    this.addUnit = new FormGroup({
      UnitMeasureNameAr: new FormControl(null, [Validators.required]),
      UnitMeasureNameEn: new FormControl(null , [Validators.required])
    });
  }

  addData() {
    this.UnitService.addUnit(this.addUnit.value).subscribe((data) => {
      this.addUnit.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onAddUnit.emit()
    });
  }

}
