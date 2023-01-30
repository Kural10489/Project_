import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateService } from '../shared/service/authenticate.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'kids',component:KidsComponent},
  {path:'women',component:WomenComponent},
  {path:'mens',component:MensComponent},
  {path:'greatDeals',component:ComingsoonComponent},
  {path:'Gifts',component:ComingsoonComponent},
  {path:'soon',component:ComingsoonComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',
  canActivate:[AuthenticateService],
  component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
