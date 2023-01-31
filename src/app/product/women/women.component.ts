import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

  public count=this.cart.totalItems;
  public product=[];
  public productidCheck=[];
  // search
  public searchKey:string='';

  constructor(private http:HttpClient,public httpMethods:HttpService,public cart:CartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    // this.cart.getTotalPrice();

    this.cart.search.subscribe(val=>{
      this.searchKey=val;
    })

  }

  addToCart(product:any){
    this.cart.productId=product.id;
    this.cart.productIds.push(product.id);
    this.cart.totalCost.push(product.price);
    this.cart.addedToCart=true;
    this.cart.addtoCart(product);
    this.countIncrease(product);
  }
  removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }
  removeCartItemCount(product:any){
    this.cart.removeCartItem(product);
    this.countDecrease(product);
  }
  addToCartCount(product:any){
    this.cart.addtoCart(product);
    this.cart.totalCost.push(product.price);
    this.countIncrease(product);
  }

  countIncrease(product:any){
    product.Quantity=product.Quantity+1

  }
  countDecrease(product:any){
    product.Quantity=product.Quantity-1

  }
}
