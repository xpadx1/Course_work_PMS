import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './todos/to-dos.component';
import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BoardComponent } from './board/board.component';
import { ErrorUrlComponent } from './error-url/error-url.component';

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full'},
  { path: 'board', component: BoardComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'todos', component: ToDosComponent},
  { path: '**', component: ErrorUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
