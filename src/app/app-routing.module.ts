import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ListLoginComponent } from './comps/list-login/list-login.component';
import { LoginComponent } from './comps/login/login.component';
import { MainComponent } from './comps/main/main.component';

const routes: Routes = [
  
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-login', component: ListLoginComponent , canActivate: [AuthGuard]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
