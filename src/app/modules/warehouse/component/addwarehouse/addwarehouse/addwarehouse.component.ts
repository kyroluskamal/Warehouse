import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WarehouseService } from 'src/app/shared/services/warehouse/warehouse.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
@Component({
  selector: 'app-addwarehouse',
  templateUrl: './addwarehouse.component.html',
  styleUrls: ['./addwarehouse.component.scss']
})
export class AddwarehouseComponent implements OnInit
{
  addWarehouse: FormGroup;
  @Output() onaddWrehouse = new EventEmitter();
  constructor(private DialogService: DialogService, private WarehouseService: WarehouseService) { }
  ngOnInit(): void
  {

    /*add form*/
    this.addWarehouse = new FormGroup({
      WareHouseNameAr: new FormControl(null, [Validators.required]),
      WareHouseNameEn: new FormControl(null, [Validators.required]),
      Location: new FormControl(null, [Validators.required]),
    });
  }

  addData()
  {
    this.WarehouseService.addWarehouse(this.addWarehouse.value).subscribe((data) =>
    {
      this.addWarehouse.reset();
      console.log(data);
      this.DialogService.toggleDisplayDialog(false);
      this.onaddWrehouse.emit();
    });
  }
  openMap()
  {
    this.DialogService.toggleMap(true);
  }
  GetLocation(event: google.maps.MapMouseEvent)
  {
    console.log(event.domEvent.bubbles);
    this.addWarehouse.get("Location").setValue(event.latLng.lat() + " , " + event.latLng.lng());
  }
}
