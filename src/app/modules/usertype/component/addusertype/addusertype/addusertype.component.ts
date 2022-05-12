import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addusertype',
  templateUrl: './addusertype.component.html',
  styleUrls: ['./addusertype.component.scss']
})
export class AddusertypeComponent implements OnInit {
  addUser:FormGroup;
  @Output() onAddUser = new EventEmitter()
  constructor(private UsertypeService:UsertypeService, private DialogService:DialogService) { }

  ngOnInit(): void {
    /*add form*/
  this.addUser = new FormGroup({
    UserTypeName: new FormControl(null, [Validators.required]),
    UserTypeNameEn: new FormControl(null , [Validators.required]),
  });
  }

  addData() {
    this.UsertypeService.addUser(this.addUser.value).subscribe((data) => {
      this.addUser.reset();
      console.log(data)
      this.DialogService.toggleDisplayDialog(false)
      this.onAddUser.emit()
    });
  }

}
