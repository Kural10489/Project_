import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public productDetails:any;
  public userDetails:any;
  public DispatchProductsDetails:any;
  public cartProductDetails:any;
   constructor(private http:HttpClient) {}

   ngOnInit(): void {
     this.getUserDetails();
     this.productDetails=[];
     this.userDetails=[];
     this.DispatchProductsDetails=[];4
     this.getProductDetais();
     this.getDispatchProductDetails();
     this.getCartProducts();
   }
 //getProductDetais()is to get all the products from the server
public getProductDetais(){
     this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
       this.productDetails=result;
     })
   }

 public getCartProducts(){
    return this.http.get<any>('http://localhost:3000/cart').subscribe((result:any)=>{
        this.cartProductDetails=result;
        console.log(result);
        console.log("hii");


    })
   }

 public getDispatchProductDetails(){
     const customer =localStorage.getItem('name');
     return this.http.get<any>(`http://localhost:3000/OrderDetails?username=`+customer).subscribe((result:any)=>{
     this.DispatchProductsDetails=result;
     });
   }

 //getUserDetails()is to get all details of user from the server
 public  getUserDetails(){
       this.http.get(`http://localhost:3000/user`).subscribe((result: any)=>{
         this.userDetails=result;
         console.log(result);

       })
     }

}
