import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public product:any;
  public cartViewProducts:any;
  public total!:number;

  constructor(public cart:CartService,private route:Router,
    private http:HttpClient, public httpService:HttpService){}
  ngOnInit():void{
    this.cart.getProducts().subscribe(response=>{
      this.product=response;
      this.httpService.getCartProducts();
      this.removeDuplicateCartView();

    })
  }

public removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }
public emptyCart(){
    this.cart.removeAllCartItems();
  }
public navigateToCheckout(){
    const post=this.http.post(this.cart.baseUrl +"/OrderDetails",this.product)
    post.subscribe();
    console.log(this.product);
    this.route.navigate(['checkout'])
  }

public removeDuplicateCartView(){
  this.cartViewProducts=new Set(this.product);
  console.log(this.cartViewProducts);
}

}
