import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {
  public searchKey:string='';
  public recommendedProducts:any;
  public pagination:number=1;
  private allProducts=10
  constructor(private http:HttpClient,public httpMethods:HttpService
    ,public cart:CartService,private route:Router,private user:UserService){}

  ngOnInit():void{
    this.httpMethods.getMenProductDetais();
    // this.cart.getTotalPrice();

this.cart.search.subscribe(val=>{
  this.searchKey=val;
},(err:any)=>{
  console.log('err',err);
  // this.user.navigateToNetworkError();

})

  }

}
