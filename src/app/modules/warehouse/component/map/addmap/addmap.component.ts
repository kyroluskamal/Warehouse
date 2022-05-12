import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MessageService } from "primeng/api";
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
@Component({
  selector: 'app-addmap',
  templateUrl: './addmap.component.html',
  styleUrls: ['./addmap.component.scss']
})
export class AddmapComponent implements OnInit
{

  constructor(private MessageService: MessageService,
    private DialogService: DialogService) { }

  map: boolean;
  options: any;
  MapToggle: boolean;
  @Output() Location = new EventEmitter();
  overlays: any[];
  MapClickEvent: any;
  ngOnInit()
  {
    this.DialogService.currentMapDisplay.subscribe(res =>
    {
      this.MapToggle = res;
      console.log(this.MapToggle);
    });
    this.options = {
      center: { lat: 36.890257, lng: 30.707417 },
      zoom: 12
    };
  }

  OnMapClick(event: any)
  {
    this.MapClickEvent = event;
  }
  sendLocation()
  {
    this.Location.emit(this.MapClickEvent);
    this.DialogService.toggleMap(false);
  }
}
