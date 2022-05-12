import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { ServicetypeService } from 'src/app/shared/services/servicetype/servicetype.service';

@Component({
  selector: 'app-servicetype',
  templateUrl: './servicetype.component.html',
  styleUrls: ['./servicetype.component.scss']
})
export class ServicetypeComponent implements OnInit {
  servicesType: any[] = [];
  columns: any[] = ['Id', "ServiceTypeNameAr","ServiceTypeNameEn"];
  labels: string[] = ['Id', "Service Type Name Arabic","Service Type Name English"];
  selectedId: number;
  isload:boolean = false;
  formType: string;
  constructor( private ServicetypeService: ServicetypeService,
    private dialogService: DialogService) { }

    ngOnInit(): void {
      this.Servicetype();
    }
  
    Servicetype() {
      this.ServicetypeService.serviceType().subscribe((res) => {
        this.servicesType = res.ServiceTypes;
        this.isload=true;
        this.servicesType.forEach((ele: any) => {
          delete ele['MainServices']
          
        });
        this.columns = Object.keys(this.servicesType[0]);
        console.log(this.columns);
      });
    }
  

    editRow(id: number) {
      this.formType = 'edit';
      this.selectedId = id;
      this.dialogService.toggleDisplayDialog(true);
      // console.log('edit id : ', id);
      // console.log(this.selectedId);
    }
    
    deleteRow(id: number) {
      console.log(id)
      this.selectedId = id;
      this.ServicetypeService.deletserviceType(id).subscribe((res) => {
        this.Servicetype();
      });
    }

    openAddDialog() {
      this.formType = 'add';
      this.dialogService.toggleDisplayDialog(true);
    }
}
