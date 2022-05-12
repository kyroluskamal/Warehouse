import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  warehouse:any[] = [];
  columns:any[] = ['Id','WareHouseNameAr','WareHouseNameEn','Location','Inventories'];
  labels:string[]=['Id','WareHouse Name Arabic','vendor Name English','Location']

  selectedId: number;
  formType: string;
  warehouseId:number;
  isload:boolean = false;
  constructor(private DialogService:DialogService, private WarehouseService:WarehouseService) { }

  ngOnInit(): void {
    this.getWarehouse();
  }


  getWarehouse(){
    this.WarehouseService.getWarehouse().subscribe((result:any)=>{
      console.log(result)
      this.warehouse = result.WareHouses;
      this.isload=true;
      this.warehouse.forEach((ele:any)=>{
        delete ele['Inventories']
      })
      this.columns = Object.keys(this.warehouse[0])
      console.log(this.columns)
    })
  }

  editRow(id:number){

    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }

  
  deleteRow(id:number){
    this.selectedId = id;
    this.WarehouseService.deletWarehouse(id).subscribe((res)=>{
      this.getWarehouse();
    })

  }

}
