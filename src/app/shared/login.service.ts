import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoginPage = new BehaviorSubject(false)

  constructor() { }

  ngOnInit(){
    console.log(2)
  }
}
