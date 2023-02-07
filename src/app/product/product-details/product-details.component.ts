import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
products:any=[];
singleProduct:any;

constructor(private http:HttpService, private activatedRoute:ActivatedRoute,private route:Router){}
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
  this.singleProduct=this.products[0];})
},(error:any)=>{console.log(error);
})
}

}
