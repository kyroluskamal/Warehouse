import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitService } from 'src/app/shared/services/unit/unit.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  unit:any[]=[]
  columns:any[] = ['Id','UnitMeasureNameAr','UnitMeasureNameEn'];
  labels:string[]=['Id','Unit Measure Name Arabic','Unit Measure Name English']
  isload:boolean = false;
  selectedId: number;
  formType: string;
  itemdetails: any;
  constructor(private UnitService:UnitService,private dialogService:DialogService,) { }

  ngOnInit(): void {
    this.getUnit()
  }

  getUnit(){
    this.UnitService.getUnit().subscribe((result:any)=>{
      console.log(result)
      
      this.unit= result.UnitMeasures;
      this.isload=true;
      this.unit.forEach((ele:any)=>{
      })
      this.columns = Object.keys(this.unit[0])
      console.log(this.columns)
    })
  }
  editRow(id:number){
    this.formType = 'edit';
    this.selectedId = id;
    
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);

    this.UnitService.getUnitById(this.selectedId).subscribe((res)=>{
      console.log(res)
      this.itemdetails = res.City
      console.log(this.itemdetails)
    })
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.UnitService.deletUnit(id).subscribe((res)=>{
      this.getUnit();
    })
    
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

}
