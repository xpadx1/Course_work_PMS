import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginSample = "Arsenii"
  pswSample = 1234

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    console.log(1)
    this.loginService.isLoginPage.next(true)
  }

  ngOnDestroy(){
    this.loginService.isLoginPage.next(false)
  }

}
