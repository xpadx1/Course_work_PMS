import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isLoginPage = new BehaviorSubject(false)

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.isLoginPage.next(true)
  }

  ngOnDestroy(){
    this.isLoginPage.next(false)
  }

}
