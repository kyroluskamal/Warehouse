import { Component, OnInit } from '@angular/core';
import { ProfessionService } from 'src/app/shared/services/profession/profession.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss']
})
export class ProfessionComponent implements OnInit {

  profession:any[] = [];
  columns:any[] = ['Id','ProfessionNameAr','ProfessionNameEn','Employees'];
  labels:string[]=['Id','Profession Name Arabic','Profession Name English']

  selectedId: number;
  formType: string;
  professionId:number;
  isload:boolean = false;
  constructor(private ProfessionService:ProfessionService,private DialogService:DialogService) { }

  ngOnInit(): void {
    this.getProfession();
  }


  getProfession(){
    this.ProfessionService.getAllProfession().subscribe((result:any)=>{
      console.log(result)
      this.profession = result.Profession;
      this.isload=true;
      this.profession.forEach((ele:any)=>{
        delete ele ['Employees']
      })
      this.columns = Object.keys(this.profession[0])
      console.log(this.columns)
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
    this.selectedId = id;
    this.ProfessionService.deleteProfession(id).subscribe((res)=>{
      this.getProfession();
    })

  }

}
