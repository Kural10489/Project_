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

}
