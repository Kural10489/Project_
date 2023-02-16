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
  public singleProduct:any;
  public cartViewProducts:any;
  public total!:number;
  public dispatchProducts:any;

  constructor(public cart:CartService,private route:Router,
    private http:HttpClient, public httpService:HttpService,private user:UserService){}


  ngOnInit():void{
    this.cart.getProducts().subscribe(response=>{
      this.product=response;
      this.removeDuplicateCartView();
    },
    (err:any)=>{
      console.log('err',err);
      this.user.navigateToNetworkError();
    })
    this.cart.getCartData().subscribe(res=>{
      this.singleProduct=res;
      this.cart.totalItems=this.singleProduct.length;
    }
    ,(err:any)=>{
      console.log('err',err);
      this.user.navigateToNetworkError();

    })

  }


public removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }

public navigateToCheckout(){
  try{
    if(this.user.isLogin()){
  this.dispatchProducts=this.singleProduct.map((a:any)=>{
    return this.cart.postData(a).subscribe((err:any)=>{
      console.log('err',err);
      alert('Error in Posting Product details');
    });
  })


    this.emptyCart();
    this.route.navigate(['checkout'])
}
else{
  this.route.navigate(['login'])

    }
  }
    catch(err){
      console.log(err);
    }
  }

public removeDuplicateCartView(){
  this.cartViewProducts=new Set(this.product);
}


public deleteAllSingleProduct(data:any){
this.cart.deleteAllSingleProduct(data.id).subscribe(error=>console.log("oops",error));
this.singleProduct.map((currentProducts:any,index:any)=>{
  if(data.id===currentProducts.id){
    this.singleProduct.splice(index,1);

  }
})
}


public emptyCart(){
  const array=this.singleProduct.map((post:{id:any})=>post.id)
  this.singleProduct=[];
  this.cart.removeAllCartItems();
  array.forEach((id:any)=>this.deleteProduct(id));
}

public deleteProduct(id:any){
   this.cart.deleteAllSingleProduct(id).subscribe(error=>console.log("oops",error)
   );
}

}
