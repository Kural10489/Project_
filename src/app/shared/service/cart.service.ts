import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");
  public totalItems!:number;
  public productId!:number;
  public productIds:number[]=[];
  public addedToCart:boolean=false;
  public totalCost:number[]=[];
  baseUrl ="http://localhost:3000";
  cartUrl=`http://localhost:3000/cart`;
  constructor(private http:HttpClient) {
    this.getProducts().subscribe(result=>{
      this.totalItems=result.length;

    });

    this.getTotalPrice();

  }


public getProducts(){
    return this.productList.asObservable();
  }

public addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);

  }

public getTotalPrice(){
  return this.totalCost.reduce((a,b)=>a+b,0);
}

public removeAllCartItems(){
    this.cartItemList=[];
    this.productIds=[];
    this.totalCost=[];
    this.productList.next(this.cartItemList);
  }

public productIdCheck(productId:any){
return this.productIds.find((a)=>a===productId)
}

public postData(data:any){
  return this.http.post(this.baseUrl +"/OrderDetails",data);
  }
  //After Product Detail page
public getCartData(){
    return this.http.get(this.baseUrl+'/cart');
  }

public deleteAllSingleProduct(id:any){
return this.http.delete(this.cartUrl+`/`+id);

}

public postCart(product:any){
  return this.http.post(this.baseUrl+'/cart',product);
}

}
