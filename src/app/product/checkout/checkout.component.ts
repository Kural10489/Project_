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
public localStoredName=localStorage.getItem('name');
  constructor(public http:HttpService,public cart:CartService,private user:UserService){


  }
  ngOnInit(): void {
    this.DispatchProductsDetails=this.http.getDispatchProductDetails().subscribe(
      res=>this.DispatchProductsDetails=res.filter((a:any)=>{
        if(this.localStoredName===a.username){
          return a;
        }
      }),(err:any)=>{
        console.log('err',err);
      this.user.navigateToNetworkError();

      });
    this.http.getUserDetails().subscribe(res=>this.userDetails=res,(err:any)=>{
      console.log('err',err);
      this.user.navigateToNetworkError();

    });
  }
public date(){
  return new Date().toLocaleDateString();
}
public userAddress(){
  if(this.userDetails.map((a:any)=>a.firstName==this.localStoredName)){
  return this.userDetails.find((a:any)=>a.address).address;
}
else{
  return (`
lakshmi nagar,velachery,chennai-28
  `)
}
}

}
