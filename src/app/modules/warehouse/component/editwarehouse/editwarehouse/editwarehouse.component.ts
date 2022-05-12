import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-editwarehouse',
  templateUrl: './editwarehouse.component.html',
  styleUrls: ['./editwarehouse.component.scss']
})
export class EditwarehouseComponent implements OnInit
{
  editWarehouse: FormGroup;

  @Input() warehouseId: number;
  @Output() onEditWarehouse = new EventEmitter();
  itemdetails: any;
  constructor(private DialogService: DialogService, private WarehouseService: WarehouseService) { }

  ngOnInit(): void
  {
    /*add form*/
    this.editWarehouse = new FormGroup({
      WareHouseNameAr: new FormControl(null, [Validators.required]),
      WareHouseNameEn: new FormControl(null, [Validators.required]),
      Location: new FormControl(null, [Validators.required]),
    });
  }

  ngOnChanges()
  {
    this.getWarehouseInfo(this.warehouseId);
  }

  getWarehouseInfo(id: number)
  {

    console.log('ddddd', id);
    this.WarehouseService.getWarehouseById(id).subscribe((result: any) =>
    {
      console.log('ddddddddddd', result);
      this.itemdetails = result.warehouse;
      this.editWarehouse.patchValue(this.itemdetails);
      console.log(this.itemdetails);

    });
  }
  editData()
  {
    this.WarehouseService.updataWarehouse(this.warehouseId, this.editWarehouse.value).subscribe((data) =>
    {
      this.DialogService.toggleDisplayDialog(false);
      this.onEditWarehouse.emit();
      if (data.Message == 'Created')
      {
        this.WarehouseService.getWarehouse();
      }
    });
  }
  openMap()
  {
    this.DialogService.toggleMap(true);
  }
  GetLocation($event)
  {
    console.log($event);
  }
}
