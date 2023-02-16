import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NetworkErrorComponent } from './network-error/network-error.component';

@NgModule({
  declarations: [
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    NetworkErrorComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,

  ]
})
export class HomeModule { }
