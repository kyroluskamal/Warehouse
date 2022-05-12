import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { UsertypeService } from 'src/app/shared/services/usertype/usertype.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients:any;
  selectedId: number;
  formType: string;
  columns:any[] = ['Id','UserTypeId','UserName','Mobile','Email','PhotoUrl','CityName','CreateDate'];
  labels:string[]=['Id','UserType','User Name','Mobile','Email','Photo Url','City Name','Create Date']
  users:any[]=[];
  arr:any[]=[];

  isload:boolean = false;
  constructor(private ClientService:ClientService, private DialogService:DialogService, private UsertypeService:UsertypeService) { }

  ngOnInit(): void {
    this.getUserType();
  }


  getClient(){
    this.ClientService.getAllUser().subscribe((result:any)=>{
      console.log(result)
      this.clients = result.Users;
      this.isload=true;
      
      if(this.clients){
        this.clients.forEach((ele:any)=>{
          delete ele['Tickets']
          delete ele['UserPermissions']
          delete ele['Subscriptions']
          delete ele['ConfirmPayment']
          delete ele['IsBlock']
          delete ele['CityId']
        })
        
      this.columns = Object.keys(this.clients[0])
      }
      this.arr=[];
      for(let x = 0; x < this.clients.length; x++){
        let obj ={
          Id:this.clients[x].Id,
          UserName:this.clients[x].UserName,
          Mobile:this.clients[x].Mobile,
          Email:this.clients[x].Email,
          PhotoUrl:this.clients[x].PhotoUrl,
          CityName:this.clients[x].CityName,
          ConfirmPayment:this.clients[x].ConfirmPayment,
          IsBlock:this.clients[x].IsBlock,
          CreateDate:this.clients[x].CreateDate,
          
          UserTypeId:this.filterUser(this.clients[x].UserTypeId)
        }
        this.arr.push(obj);
      }
      this.clients = this.arr;
      console.log(this.clients);
    })
  }

  editRow(id:number){

    this.formType = 'edit';
    this.selectedId = id;
    this.DialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }

  openAddDialog() {
    this.formType = 'add';
    this.DialogService.toggleDisplayDialog(true);
  }
  deleteRow(id:number){
    this.ClientService.deleteUser(id).subscribe((res)=>{
      this.getClient();
    })
  }


  // get user type

  getUserType(){
    this.UsertypeService.getUser().subscribe((result:any)=>{
      console.log(result)
      this.users = result.UserTypes;
      this.getClient();
    })
  }

  filterUser(id:any){    
    let counteryName = _.find(this.users, function(o) { return o.Id == id; });
    return counteryName?.UserTypeName;
  }

  public onShowRowDetails(clientId:number):void{
    this.selectedId = clientId;
    this.formType = 'showDetails';
    this.DialogService.toggleDisplayDialog(true);
  }

}
