import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private display = new BehaviorSubject<boolean>(false);;
  currentDisplayValue = this.display.asObservable();
  constructor() { }
  toggleDisplayDialog(value:boolean){
    this.display.next(value)
  }
}


