import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private readonly authService:AuthService,
    private router:Router
    ) { }

  public changePassword:FormControl=new FormControl('',[Validators.required,Validators.minLength(5)])

  ngOnInit(): void {
 this.changePassword.valueChanges.subscribe(_=>{
   console.log(this.changePassword)
 })
  }

  public changePass():void{
   const userId:number = parseInt(localStorage.getItem('myid') || '')
   console.log(userId)
    const newPass=this.changePassword.value
    this.authService.changePassword(userId,{NewPassword:newPass}).subscribe(()=>{
      this.router.navigate(['/home'])
    })

}

}
