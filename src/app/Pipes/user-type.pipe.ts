import { Pipe, PipeTransform } from '@angular/core';
import { UsertypeService } from '../../app/shared/services/usertype/usertype.service';
@Pipe({
  name: 'userType'
})
export class UserTypePipe implements PipeTransform
{
  UserTypes: any[] = [];
  constructor(private UserTypeService: UsertypeService)
  {
    this.UserTypeService.getUser().subscribe(res =>
    {
      console.log(res);

      this.UserTypes = res.UserTypes;
    });
  }
  transform(value: unknown, lang: string): string
  {
    console.log(this.UserTypes);
    if (lang == 'ar')
    {
      return this.UserTypes.filter(x => x.Id == value)[0].UserTypeName;
    } else if (lang == 'en')
    {
      return this.UserTypes.filter(x => x.Id == value)[0].UserTypeNameEn;
    }
    return "";
  }

}
