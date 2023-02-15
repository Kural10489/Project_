import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

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
public localStoredName=localStorage.getItem('name');
  constructor(public http:HttpService,public cart:CartService){


  }
  ngOnInit(): void {
    this.DispatchProductsDetails=this.http.getDispatchProductDetails().subscribe(
      res=>this.DispatchProductsDetails=res.filter((a:any)=>{
        if(this.localStoredName===a.username){
          return a;
        }
      }));
    this.http.getUserDetails().subscribe(res=>this.userDetails=res);
   this.orderDetails=this.DispatchProductsDetails.map((a:any)=> a);
  }
public date(){
  return new Date().toLocaleDateString();
}
public userAddress(){
  console.log(this.userDetails.map((a:any)=>a.firstName));
  console.log(this.localStoredName);
  console.log(this.userDetails.map((a:any)=>a.address));

  if(this.userDetails.map((a:any)=>a.firstName==this.localStoredName)){
  return this.userDetails.map((a:any)=>a.address)
}
else{
  return (`
lakshmi nagar,velachery,chennai-28
  `)
}
}

}
