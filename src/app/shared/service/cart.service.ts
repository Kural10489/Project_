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
  public products:any;
  public addedToCart:boolean=false;
  public total=0;
  public totalCost:number[]=[];
  baseUrl ="http://localhost:3000";

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

public removeCartItem(product:any){
    this.cartItemList.map((currentProducts:any,index:any)=>{
      if(product.id===currentProducts.id){
        this.cartItemList.splice(index,1);
        this.removeProductId(product);
        console.log(this.productIds);
       console.log(this.totalCost);
      this.removeProductPrice(product);
      }
    })
    this.productList.next(this.cartItemList);
  }

public removeAllCartItems(){
    this.cartItemList=[];
    this.productIds=[];
    this.productList.next(this.cartItemList);
  }

public productIdCheck(productId:any){
return this.productIds.find((a)=>a===productId)
}
public removeProductPrice(product:any){
  let removePrice=this.totalCost.indexOf(product.price);
  if(removePrice>-1){
    this.totalCost.splice(removePrice,1);
    console.log(this.totalCost);
  }
}
public removeProductId(product:any){
  let removeProductId=this.productIds.indexOf(product.id);
  if(removeProductId>-1){
    this.productIds.splice(removeProductId,1);
  }
}
public postData(data:any){
  return this.http.post(this.baseUrl +"/OrderDetails",data).subscribe();
  }
}
