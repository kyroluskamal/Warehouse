import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-addmap',
  templateUrl: './addmap.component.html',
  styleUrls: ['./addmap.component.scss']
})
export class AddmapComponent implements OnInit {

  constructor(private MessageService:MessageService) {}

  options: any;

  overlays: any[];

  ngOnInit() {
      this.options = {
          center: {lat: 36.890257, lng: 30.707417},
          zoom: 12
      };
  }



}
