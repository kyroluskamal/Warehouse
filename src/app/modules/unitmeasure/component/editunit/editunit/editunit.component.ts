import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { UnitService } from 'src/app/shared/services/unit/unit.service';
UnitService
@Component({
  selector: 'app-editunit',
  templateUrl: './editunit.component.html',
  styleUrls: ['./editunit.component.scss']
})
export class EditunitComponent implements OnInit {
  @Input() unitId:number;
  @Output() onEditUnit = new EventEmitter()
  editUnit: FormGroup;
  constructor(private UnitService:UnitService, private DialogService:DialogService) { }

  ngOnInit(): void {
    /*Edit form*/
    this.editUnit = new FormGroup({
      UnitMeasureNameAr: new FormControl(null, [Validators.required]),
      UnitMeasureNameEn: new FormControl(null , [Validators.required])
    });
    console.log(this.unitId)

  }
  ngOnChanges()
  {
    this.getUnitInfo(this.unitId);
  }
  getUnitInfo(id:number) {
    this.UnitService.getUnitById(id).subscribe((result:any)=>{
      this.editUnit.patchValue(result.UnitMeasure)
            console.log(result)
    })
  }
  editData() {
    this.UnitService.updataUnit(this.unitId,this.editUnit.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditUnit.emit()
      if (data.Message == 'Created') {
        this.UnitService.getUnit();
      }
    });
  }

}
