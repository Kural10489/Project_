import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AuthenticateService } from './service/authenticate.service';
import { HttpClient, HttpHandler } from '@angular/common/http';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    FilterPipe,
    NavbarComponent,
    FooterComponent

  ],
  providers:[AuthenticateService,HttpClient]
})
export class SharedModule { }
