import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public productDetails:any=[];
  public userDetails:any;
  public userNames:any=[];
  public DispatchProductsDetails:any;
  public cartProductDetails:any;

   constructor(private http:HttpClient) {
    this.getUserDetails();
    this.productDetails=[];
    this.userDetails=[];
    this.DispatchProductsDetails=[];
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
     try{
     return this.http.get<any>(`http://localhost:3000/OrderDetails?username=`+customer).subscribe((result:any)=>{
     this.DispatchProductsDetails=result;
     });
    }
    catch{
      return console.log("Error in fetching Order details");
    }
   }

 //getUserDetails()is to get all details of user from the server
 public  getUserDetails(){
  try{
       this.http.get(`http://localhost:3000/user`).subscribe((result: any)=>{
         this.userDetails=result.map((a:any)=>a.firstName);
         console.log(result);

       })
      }
      catch{
        console.log("Error in fetching user details");

      }
     }
     public getUserNames(){
      return this.http.get(`http://localhost:3000/user`);
  }
  public getProducts(){
    return this.http.get(`http://localhost:3000/products`);
  }
}
