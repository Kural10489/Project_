import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CommonComponent } from './common/common.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    MensComponent,
    WomenComponent,
    KidsComponent,
    ComingsoonComponent,
    NotfoundComponent,
    CartComponent,
    CommonComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
