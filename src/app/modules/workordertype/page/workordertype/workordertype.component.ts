import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { WorkordertypeService } from 'src/app/shared/services/workordertype/workordertype.service';

@Component({
  selector: 'app-workordertype',
  templateUrl: './workordertype.component.html',
  styleUrls: ['./workordertype.component.scss']
})
export class WorkordertypeComponent implements OnInit {
  workstype: any[] = [];
  columns: any[] = ['Id',"WOypeNameAr","WOypeNameEn"];
  labels: string[] = ['Id',"Work Order Type Arabic","Work Order Type English"];
  isload:boolean = false;
  selectedId: number;
  formType: string;
  constructor(private dialogService: DialogService, private WorkordertypeService:WorkordertypeService) { }

  ngOnInit(): void {
    this.getWorkType();
  }

  getWorkType() {
    this.WorkordertypeService.workOrderType().subscribe((result: any) => {
      console.log( result);
      this.workstype = result.WorkOrderTypes;
      this.isload=true;
      this.workstype.forEach((ele: any) => {

      });
      this.columns = Object.keys(this.workstype[0]);
      console.log(this.columns);
    });
  }

  deleteRow(id: number) {
    this.selectedId = id;
    this.WorkordertypeService.deletworkOrderType(id).subscribe((res) => {
      this.getWorkType();
    });
  }

  editRow(id: number) {
    this.formType = 'edit';
    this.selectedId = id;
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }
  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

}
