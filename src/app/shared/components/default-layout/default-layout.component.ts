import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';
import { navItems } from '../../../_nav';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  userId:number = parseInt(localStorage.getItem('myid') || '')
  user:any;
  breadCrumb$: Observable<any[]>;

  constructor(private userService:UserService , private Router:Router,
    private bcService: BreadcrumbService){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnInit(): void {
    this.getUserById(this.userId)
    console.log(+localStorage.getItem('myid'));
    this.breadCrumb$ = this.bcService.breadcrumbs$;
  }
  logout(){
    localStorage.removeItem('mytoken')
    this.Router.navigate(['/login'])
  }
  getUserById(userId:number){
    this.userService.getUserById(userId).subscribe((res: any) => {
      console.log('user',res)
      this.user = res.Users
    });
  }

  changePassword(userId)
  {
    
  }
}
