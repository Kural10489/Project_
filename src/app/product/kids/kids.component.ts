import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  public searchKey:string='';
  public pagination:number=1;

  constructor(public httpMethods:HttpService,private cart:CartService){}

  ngOnInit():void{
    this.httpMethods.getKidsProductDetais();

    this.cart.search.subscribe(val=>{
      this.searchKey=val;
    },(err:any)=>{
      console.log('err',err);
      // this.user.navigateToNetworkError();

    })

  }
}
