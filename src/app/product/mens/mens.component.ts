import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {
  public searchKey:string='';


  constructor(private http:HttpClient,public httpMethods:HttpService
    ,public cart:CartService,private route:Router){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    // this.cart.getTotalPrice();

this.cart.search.subscribe(val=>{
  this.searchKey=val;
})

  }

  // public addToCart(product:any){
  //   this.cart.productId=product.id;
  //   this.cart.productIds.push(product.id);
  //   this.cart.totalCost.push(product.price);
  //   this.cart.addedToCart=true;
  //   this.cart.addtoCart(product);
  //   this.cart.products+=product;
  //   this.countIncrease(product);
  // }

  // public removeCartItemCount(product:any){
  //   this.cart.removeCartItem(product);
  //   this.addedToCartToggle();
  //   this.countDecrease(product);
  // }
  // public addToCartCount(product:any){
  //   this.cart.addtoCart(product);
  //   this.cart.totalCost.push(product.price);
  //   this.countIncrease(product);
  // }

  // public countIncrease(product:any){
  //   product.Quantity=product.Quantity+1

  // }
  // public countDecrease(product:any){
  //   product.Quantity=product.Quantity-1

  // }
  // public addedToCartToggle(){
  //   this.cart.addedToCart=!this.cart.addedToCart;
  // }
  public productView(id:any){
    this.route.navigateByUrl(`product-detail/${id}`);
    }
}
