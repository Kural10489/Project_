import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public productDetails:any=[];
  public userDetails:any;
  public userNames:any=[];
  // public DispatchProductsDetails:any;
  public cartProductDetails:any;

   constructor(private http:HttpClient) {
    this.getUserDetails();
    this.productDetails=[];
    this.userDetails=[];
    this.getProductDetais();
    this.getDispatchProductDetails();
    // this.getUserNames();

   }

 //getProductDetais()is to get all the products from the server
public getProductDetais(){
  try{
     this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
       this.productDetails=result;
     })
    }
    catch{
      return console.log("Error in fetching products details");
    }
   }

 public getCartProducts(){
  try{
    return this.http.get<any>('http://localhost:3000/cart').subscribe((result:any)=>{
        this.cartProductDetails=result;
        console.log(result);
    })
  }
    catch{
      return console.log("Error in fetching cart details");
    }
   }

 public getDispatchProductDetails(){
     const customer =localStorage.getItem('name');
     return this.http.get<any>(`http://localhost:3000/OrderDetails?username=`+customer);
   }

 //getUserDetails()is to get all details of user from the server
 public getUserDetails(){
     return this.http.get(`http://localhost:3000/user`);
     }
     public getUserNames(){
      return this.http.get(`http://localhost:3000/user`);
  }
  public getProducts(){
    return this.http.get(`http://localhost:3000/products`);
  }
  public getpaginatedProducts(page:number){
    return this.http.get(`http://localhost:3000/products?page=${page}`);
  }
}
