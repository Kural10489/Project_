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
  public pagination:number=1;
  // search
  public searchKey:string='';

  constructor(public httpMethods:HttpService
    ,public cart:CartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    this.cart.search.subscribe(val=>{
      this.searchKey=val;
    },(err:any)=>{
      console.log('err',err);
      // this.user.navigateToNetworkError();

    })

  }
}
