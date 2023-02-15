import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';
import { ViewChild, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

products:any=[];
singleProduct:any;

recommendedProducts:any;
pagination:number=1;
allProducts=10

ratingCount=0;
totalRating=0;
ratingControl=new FormControl(0);
finalRating:any;

// Adding product to cart
public size:any;
public quantity:any;
public customer=localStorage.getItem('name');

@ViewChild('imageSlide') imageSlide: ElementRef | undefined;
@ViewChild('review') review: ElementRef | undefined;
constructor(private http:HttpService,private httpClient:HttpClient, private activatedRoute:ActivatedRoute,private route:Router,private cart:CartService){
  this.http.getpaginatedProducts(this.pagination).subscribe(res=>this.recommendedProducts=res,error=>console.log("oops",error));
  console.log(this.cart.productIds);
  console.log(this.cart.totalCost);


}


ngOnInit():void{
let id=0;
this.activatedRoute.paramMap.subscribe((data:any)=>{
  id=data.params.id;
  console.log(id);

  this.http.getProducts().subscribe(res=>{
   this.products=res;
  console.log(this.products);


  this.products=this.products.filter((data:any)=>data.id==id);
  if(this.products.length<=0){
    this.route.navigateByUrl('');
  }
  this.singleProduct=this.products[0];

  console.log(this.singleProduct);
})
},(error:any)=>{console.log(error);
})

}

public productImage1(singleProduct:any){
  this.imageSlide?.nativeElement.setAttribute("src",singleProduct.image)
  }
public productImage2(singleProduct:any){
this.imageSlide?.nativeElement.setAttribute("src",singleProduct.image2)
}
public productImage3(singleProduct:any){
  this.imageSlide?.nativeElement.setAttribute("src",singleProduct.image3)
  }
public productImage4(singleProduct:any){
    this.imageSlide?.nativeElement.setAttribute("src",singleProduct.image4)
    }
public getRating(){
  this.ratingCount++;
  this.totalRating+=this.ratingControl?.value||0;
  this.finalRating=(this.totalRating/this.ratingCount).toFixed(1);

}
public sizeOfProduct(event:any){
let size=event.target.value;
this.size=size;
console.log(size);

}
public quantityOfProduct(event:any){
  let quantity=event.target.value;
  this.quantity=quantity;
  console.log(quantity);
}

public postingReviewComment(event:any){
let Customerreview=this.review?.nativeElement.value;
console.log(Customerreview);

}
public addToCart(product:any){
  product.size=this.size||1;
  product.quantity=this.quantity||1;
  this.cart.totalItems++;
  this.cart.productIds.push(product.id);
  this.cart.totalCost.push(product.price);
  product.username=this.customer;

try{
this.httpClient.post('http://localhost:3000/cart',product).subscribe();
} catch(err){
  console.log(err);
}}

}
