import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public productDetails: any = [];
  public userDetails: any;
  public cartProductDetails: any;
  public baseUrl = `http://localhost:3000`;
  public cartUrl = `http://localhost:3000/cart`;
  public productUrl = `http://localhost:3000/products`;
  public userUrl = `http://localhost:3000/user`;


  constructor(
    private http: HttpClient,
    private route: Router,
    private user:UserService
  ) {
    this.getUserDetails();
    this.getDispatchProductDetails();
  }

  //getProductDetais()is to get all the products from the server
  public getProductDetais() {
    this.http.get(this.baseUrl+"/products"+"/women").subscribe(
      (result: any) => {
        this.productDetails = result;
      },
      (err: any) => {
        console.log('err', err);
        // this.user.navigateToNetworkError();
      }
    );
  }
  public getMenProductDetais() {
    this.http.get(this.baseUrl+"/products"+"/men").subscribe(
      (result: any) => {
        this.productDetails = result;
      },
      (err: any) => {
        console.log('err', err);
        // this.user.navigateToNetworkError();
      }
    );
  }
  public getKidsProductDetais() {
    this.http.get(this.baseUrl+"/products"+"/kids").subscribe(
      (result: any) => {
        this.productDetails = result;
      },
      (err: any) => {
        console.log('err', err);
        // this.user.navigateToNetworkError();
      }
    );
  }


  public getDispatchProductDetails() {

    return this.http.get<any>(
      `${this.baseUrl}/OrderDetails?username=${JSON.parse(sessionStorage.getItem("user")!)}`
      //  ${this.getCustomerName()}
    );
  }



  //getUserDetails()is to get all details of user from the server
  public getUserDetails() {
    return this.http.get(this.userUrl);
  }

  public getProducts(id:number) {
    return this.http.get(this.productUrl+"/product-detail/"+id);
  }

  public getpaginatedProducts(page: number) {
    return this.http.get(`${this.baseUrl}products?page=${page}`);
  }
//   public getCustomerName=()=>{
//     this.jwt= jwt_decode(localStorage.getItem('name')!);
//     console.log(Object.values(this.jwt));
//     return Object.values(this.jwt)[3];
//  }

}
