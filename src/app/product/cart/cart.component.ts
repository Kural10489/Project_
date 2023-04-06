import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public product:any;
  public singleProduct:any=[];
  public cartViewProducts:any;
  public total!:number;
  public dispatchProducts:any;

  constructor(public cart:CartService,private route:Router,
    private http:HttpClient, public httpService:HttpService,private user:UserService){}


  ngOnInit():void{
    this.cart.getProducts().subscribe({next:(response)=>{
      this.product=response;
      this.removeDuplicateCartView();
    },
   error:(err)=>{
      // this.user.navigateToNetworkError();
    }})
    this.cart.getCartData().subscribe({
      next:res=>{
      this.singleProduct=res;
    },
  error:(err:any)=>{
      console.log('err',err);
      // this.user.navigateToNetworkError();

    }})

  }


public navigateToCheckout(){
    if(this.user.isLogin()){
  this.dispatchProducts=this.singleProduct.map((a:any)=>{
    // a.username=localStorage.getItem('name');
    console.log(a);
    return this.cart.postData(a).subscribe((err:any)=>{
      console.log('err',err);
    });
  })

    this.emptyCart();
    this.route.navigate(['orders'])
}
else{
  this.route.navigate(['login'])

    }
  }

public removeDuplicateCartView(){
  this.cartViewProducts=new Set(this.product);
}


public deleteAllSingleProduct(data:any){
this.cart.deleteAllSingleProduct(data._id).subscribe(error=>console.log("oops",error));
this.singleProduct.map((currentProducts:any,index:any)=>{
  if(data.id===currentProducts.id){
    this.singleProduct.splice(index,1);

  }
})
}


public emptyCart(){
  const array=this.singleProduct.map((post:{_id:any})=>post._id)
  this.singleProduct=[];
  this.cart.removeAllCartItems();
  array.forEach((id:any)=>this.deleteProduct(id));
}

public deleteProduct(id:any){
   this.cart.deleteAllSingleProduct(id).subscribe(error=>console.log("oops",error)
   );
}

}
