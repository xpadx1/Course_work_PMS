import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { LoginPageComponent } from '../login-page/login-page.component';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('insideElement') insideElement!: ElementRef;

  showLogout = false;
  isLoginPage = false;

  constructor(
              private renderer: Renderer2,
              public loginService: LoginService,
              public loginComponent: LoginPageComponent
              ) { 
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.toggleButton || e.target === this.insideElement?.nativeElement) {
        return
      }

      if (e.target !== this.toggleButton?.nativeElement) {
          this.showLogout = false;
      }
   });

}
  ngOnInit(): void {
    this.loginService.isLoginPage.subscribe(res => this.isLoginPage = res)
    console.log(this.isLoginPage)
  }

  over(event?: any){
    this.showLogout = !this.showLogout
  }

  

}
