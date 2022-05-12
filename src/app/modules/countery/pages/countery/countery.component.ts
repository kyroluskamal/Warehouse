import { Component, OnInit } from '@angular/core';
import { CounteryService } from 'src/app/shared/services/countery/countery.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
@Component({
  selector: 'app-countery',
  templateUrl: './countery.component.html',
  styleUrls: ['./countery.component.css']
})
export class CounteryComponent implements OnInit {

  countery:any[] = [];
  columns:any[] = ['Id','CountryNameAr','CountryNameEn'];
  labels:string[]=['Id','Country Name Arabic','Country Name English']

  selectedId: number;
  formType: string;
  counteryId:number;
  isload:boolean = false;
  constructor(private CounteryService:CounteryService, private dialogService: DialogService ) { }

  ngOnInit(): void {
    this.getcountery();
  }


  getcountery(){
    this.CounteryService.getAllCountery().subscribe((result:any)=>{
      console.log(result)
      this.countery = result.Country;
      this.isload=true;
      this.countery.forEach((ele:any)=>{
        delete ele['City']
      })
      this.columns = Object.keys(this.countery[0])
      console.log(this.columns)
    })
  }

  editRow(id:number){

    this.formType = 'edit';
    this.selectedId = id;
    this.dialogService.toggleDisplayDialog(true);
    console.log('edit id : ', id);
  }

  openAddDialog() {
    this.formType = 'add';
    this.dialogService.toggleDisplayDialog(true);
  }
  deleteRow(id:number){
    this.selectedId = id;
    this.CounteryService.deleteCountery(id).subscribe((res)=>{
      this.getcountery();
    })

  }
}
