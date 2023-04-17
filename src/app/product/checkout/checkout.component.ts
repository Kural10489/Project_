import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
public orderDetails:any;
public DispatchProductsDetails:any=[];
public totalNumberOfOrders=this.DispatchProductsDetails.length;
public userDetails:any=[];
public token=localStorage.getItem('name');
public total:any=[]
public totalAmount:any;
public AmountToBePaid:any;

  constructor(public http:HttpService,public cart:CartService,private user:UserService){


  }
  ngOnInit(): void {
   this.user.setAuthToken(this.token);
   this.DispatchProductsDetails=JSON.parse(sessionStorage.getItem('orderDetails')!)
    console.log(this.DispatchProductsDetails);
    this.totalAmountToBePaid()
  }

public totalAmountToBePaid(){
  const dispatchPrice=this.DispatchProductsDetails.filter((a:any)=>{
    console.log(a.price);
    this.total= (this.total+a.price);
    return a.price})
    this.totalAmount=this.total.match(/.{1,4}/g);
    this.AmountToBePaid=this.totalAmount.map(Number);
    console.log( this.totalAmount);

  return this.AmountToBePaid.reduce((a:any,b:any)=>{
    console.log(a+b);
    return a+b})

}
}
