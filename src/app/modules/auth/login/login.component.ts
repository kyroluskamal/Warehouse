import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag:boolean= false;
  errorMessage:string='';

  loginForm = new FormGroup({
    'mobile':new FormControl(null , [ Validators.required]),
   'password':new FormControl(null , [Validators.required])
 });
  constructor(private authService:AuthService , private router:Router) {
    var token = localStorage.getItem('mytoken');
    if(token)
    {
      this.router.navigate(['/profile'])
    }
   }
  getLoginInfo(loginForm:FormGroup)
  {
      this.authService.login(loginForm.value).subscribe((res)=>{

        localStorage.setItem("myid" ,res.Data.user.id),
        localStorage.setItem("mytoken" ,res.Data.user.token)
        // this.router.navigate(['/profile']);
        console.log(res);
        if(res.Message == "OK")
        {
          this.router.navigate(['/home'])
        }
        else
        {
          this.flag = true;
        }

      })
  }
  ngOnInit(): void {


  }

}
