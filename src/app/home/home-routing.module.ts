import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NetworkErrorComponent } from './network-error/network-error.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',
  component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'networkerror',component:NetworkErrorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
