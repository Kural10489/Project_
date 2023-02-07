import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
public orderDetails:any=[];
public userDetails=this.http.userDetails;
public localStoredName=localStorage.getItem('name');
  constructor(private cart:CartService,public http:HttpService){
   this.orderDetails=new Set(this.http.DispatchProductsDetails);
   console.log(this.http.DispatchProductsDetails);
    console.log(this.orderDetails);

  }
  ngOnInit(): void {
    this.http.getDispatchProductDetails();
    this.userAddress();
  }
  userAddress(){
    let currentUser;
  if(this.localStoredName==this.userDetails.map((a:any)=>currentUser=a.firstName)){
    return console.log(currentUser);

  }
  else{
    return console.log("not found");
  }
  }

}
