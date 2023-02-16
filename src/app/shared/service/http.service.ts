import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public productDetails:any=[];
  public userDetails:any;
  public cartProductDetails:any;

   constructor(private http:HttpClient,private route:Router,private user:UserService) {
    this.getUserDetails();
    this.getProductDetais();
    this.getDispatchProductDetails();

   }

 //getProductDetais()is to get all the products from the server
public getProductDetais(){
     this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
       this.productDetails=result;
     },(err:any)=>{
      console.log('err',err);
      this.user.navigateToNetworkError();

    })


   }

 private getCartProducts(){
    return this.http.get<any>('http://localhost:3000/cart').subscribe((result:any)=>{
        this.cartProductDetails=result;
    },(err:any)=>{
      console.log('err',err);
      this.user.navigateToNetworkError();

    })
   }

 public getDispatchProductDetails(){
     const customer =localStorage.getItem('name');
     return this.http.get<any>(`http://localhost:3000/OrderDetails?username=`+customer);
   }

 //getUserDetails()is to get all details of user from the server
public getUserDetails(){
     return this.http.get(`http://localhost:3000/user`);
     }

public getProducts(){
    return this.http.get(`http://localhost:3000/products`);
  }

public getpaginatedProducts(page:number){
    return this.http.get(`http://localhost:3000/products?page=${page}`);
  }

}
