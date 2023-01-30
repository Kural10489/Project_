import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  public products=[];

  constructor(private cart:CartService,public http:HttpService){}
  ngOnInit(): void {
    this.http.getDispatchProductDetails();
  

    // this.http.getUserDetails();
  }


}
