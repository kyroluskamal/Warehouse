import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';
UsertypeService
@Component({
  selector: 'app-editusertype',
  templateUrl: './editusertype.component.html',
  styleUrls: ['./editusertype.component.scss']
})
export class EditusertypeComponent implements OnInit {
  @Input() userId:number;
  @Output() onEditUser = new EventEmitter()
  editUser: FormGroup;
  constructor(private UsertypeService:UsertypeService, private DialogService:DialogService) { }

  ngOnInit(): void {
    this.editUser = new FormGroup({
      UserTypeName: new FormControl(null, [Validators.required]),
      UserTypeNameEn: new FormControl(null , [Validators.required]),
    });
    // this.getUserInfo(this.userId);
  }
ngOnChanges()
{
  this.getUserInfo(this.userId);
}
  getUserInfo(id:number) {
    console.log(id)
    this.UsertypeService.getUserById(id).subscribe((result:any)=>{
      this.editUser.patchValue(result.UserType)
      console.log(result)
    })
  }
  editData() {
    this.UsertypeService.updataUser(this.userId,this.editUser.value).subscribe((data) => {
      this.DialogService.toggleDisplayDialog(false)
      this.onEditUser.emit()
      if (data.Message == 'Created') {
        this.UsertypeService.getUser();
      }
    });
  }

}
