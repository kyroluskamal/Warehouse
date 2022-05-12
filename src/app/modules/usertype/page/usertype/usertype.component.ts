import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';
@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.scss']
})
export class UsertypeComponent implements OnInit {
  users: any[] = [];
  columns: any[] = ['Id','UserTypeName', 'UserTypeNameEn'];
  labels: string[] = ['Id',"User Type Name Arabic","User Type Name English"];
  selectedId: number;
  formType: string;
  isload:boolean = false;
  constructor(private dialogService: DialogService, private UsertypeService:UsertypeService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.UsertypeService.getUser().subscribe((result: any) => {
      console.log('tickets', result);
      this.users = result.UserTypes;
      this.isload=true;
      this.users.forEach((ele: any) => {
        delete ele['User'];
      });
      this.columns = Object.keys(this.users[0]);
      console.log(this.columns);
    });
  }

  deleteRow(id: number) {
    this.selectedId = id;
    this.UsertypeService.deletUser(id).subscribe((res) => {
      console.log(id)
      this.getUser();
    });
  }

  editRow(id: number) {
    this.formType = 'edit';
    this.selectedId = id;
    this.dialogService.toggleDisplayDialog(true);
    // console.log('edit id : ', id);
    // console.log(this.selectedId);
  }
  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }

}
