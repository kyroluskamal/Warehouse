import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService
{

  private display = new BehaviorSubject<boolean>(false);
  private Map = new BehaviorSubject<boolean>(false);
  currentMapDisplay = this.Map.asObservable();
  currentDisplayValue = this.display.asObservable();
  constructor() { }
  toggleDisplayDialog(value: boolean)
  {
    this.display.next(value);
  }
  toggleMap(vale: boolean)
  {
    this.Map.next(vale);
  }
}


