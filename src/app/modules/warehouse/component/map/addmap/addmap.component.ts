import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MessageService } from "primeng/api";
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
@Component({
  selector: 'app-addmap',
  templateUrl: './addmap.component.html',
  styleUrls: ['./addmap.component.scss']
})
export class AddmapComponent implements OnInit, AfterViewInit
{
  MapMarkers: google.maps.Marker[] = [];
  CurrentMarker: google.maps.Marker;
  zoom = 12;
  mapCenter: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    maxZoom: 20,
    minZoom: 8,
    mapTypeId: 'roadmap',
    clickableIcons: true,
  };
  autocomplete: google.maps.places.Autocomplete;
  @ViewChild('gmap') gmapElement: GoogleMap;
  @ViewChild('autocomplete') autocompleteInput: ElementRef<HTMLInputElement> = {} as ElementRef<HTMLInputElement>;

  @Output() Location = new EventEmitter();
  overlays: any[];
  MapClickEvent: any;
  constructor(private MessageService: MessageService,
    private DialogService: DialogService) { }
  ngAfterViewInit(): void
  {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.nativeElement,
      {
        types: ['establishment'],
        componentRestrictions: { country: 'EG' },
        fields: ["formatted_address", "geometry", "name"],
      }
    );
    console.log(this.gmapElement.googleMap);
    const searchBox = new google.maps.places.SearchBox(this.autocompleteInput.nativeElement);
    this.gmapElement.googleMap?.controls[google.maps.ControlPosition.TOP_LEFT].push(this.autocompleteInput.nativeElement);

    this.autocomplete.bindTo('bounds', this.gmapElement.googleMap);
    searchBox.bindTo('bounds', this.gmapElement.googleMap);
  }

  ngOnInit()
  {
    navigator.geolocation.getCurrentPosition((position) =>
    {
      this.mapCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  onMapClick(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent)
  {
    this.CurrentMarker = new google.maps.Marker({
      position: event.latLng,
      animation: google.maps.Animation.DROP,
    });
    this.Location.emit(event);
  }

}
