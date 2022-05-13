import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'confirmPayment'
})
export class ConfirmPaymentPipe implements PipeTransform
{

  transform(value: number): string
  {
    if (value === 0)
    {
      return "Unpaid";
    }
    return "Paid";
  }

}
