import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {
  constructor(public http:HttpService,public cart:CartService,private httpClient:HttpClient
              ){
    this.productDetails=this.http.productDetails
  }
  public addedToCart:boolean=false;
  public count=this.cart.totalItems;
  public productDetails:any;
  public productId!:number;
  public searchKey:string='';
@Input() products:any;


public addToCart(product:any){
  this.cart.productId=product.id;
  this.countIncrease(product);
  this.cart.productIds.push(product.id);
  // this.cart.totalCost.add(product.price);
  this.cart.totalCost.push(product.price);
  this.cart.addedToCart=true;
  this.cart.addtoCart(product);
  // this.cart.products=this.cart.products+product;
  // localStorage.setItem('products',JSON.stringify(this.cart.products));
  this.httpClient.post(this.cart.baseUrl+'/cart',product).subscribe();
  console.log(this.http.cartProductDetails);
}

public removeCartItemCount(product:any){
  this.cart.removeCartItem(product);
  this.addedToCartToggle();
  // this.cart.productIds.splice(product.id,1);
  this.cart.productIds.shift();
  this.countDecrease(product);
}
public addToCartCount(product:any){
  this.cart.addtoCart(product);
  this.cart.totalCost.push(product.price);
  this.countIncrease(product);
}

public countIncrease(product:any){
  product.Quantity=product.Quantity+1

}
public countDecrease(product:any){
  product.Quantity=product.Quantity-1

}
public addedToCartToggle(){
  this.cart.addedToCart=!this.cart.addedToCart;
}

}
