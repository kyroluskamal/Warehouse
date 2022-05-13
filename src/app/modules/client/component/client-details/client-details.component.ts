import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ClientService } from 'src/app/shared/services/client/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit
{

  constructor(private ClientService: ClientService) { }
  @Input() set clientId(clientId: number)
  {
    this._clientId = clientId;
    this.getClientInfo(clientId);
  }


  public confirmPaymentItems: MenuItem[];
  public isBlockItems: MenuItem[];
  public clientDetails: any;
  public _clientId: number;

  ngOnInit(): void
  {


    this.confirmPaymentItems = [{
      label: 'unpaid',
      icon: 'pi pi-times', command: () =>
      {
        this.updateConfirmPayment(0);
      }

    },
    {
      label: 'paid',
      icon: 'pi pi-bars'
      , command: () =>
      {
        this.updateConfirmPayment(1);
      }
    }];

    this.isBlockItems = [{
      label: 'False',
      icon: 'pi pi-times', command: () =>
      {
        this.updateIsBlock(false);
      }

    },
    {
      label: 'True',
      icon: 'pi pi-bars'
      , command: () =>
      {
        this.updateIsBlock(true);
      }
    }];
  }
  public updateIsBlock(isBlock: boolean): void
  {
    if (isBlock === false)
    {
      this.clientDetails.IsBlock = false;
      this.ClientService.blockUser(this._clientId, false).subscribe(console.log);
    }
    else
    {
      this.clientDetails.IsBlock = true;

      this.ClientService.blockUser(this._clientId, true).subscribe(console.log);
    }
  }
  public updateConfirmPayment(payment: number): void
  {
    if (payment === 0)
    {
      this.clientDetails.ConfirmPayment = 0;
      this.ClientService.paymentUser(this._clientId, 0).subscribe(console.log);
    }
    else
    {
      this.clientDetails.ConfirmPayment = 1;
      this.ClientService.paymentUser(this._clientId, 1).subscribe(console.log);

    }

  }

  public getClientInfo(Id: number): void
  {
    console.log(Id);
    this.ClientService.getAllUserById(Id).subscribe((result: any) =>
    {

      this.clientDetails = result.Users;
    });
  }

}
