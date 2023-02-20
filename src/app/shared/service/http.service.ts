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
  public baseUrl = `http://localhost:3000/`;
  public cartUrl = `http://localhost:3000/cart`;
  public productUrl = `http://localhost:3000/products`;
  public userUrl = `http://localhost:3000/user`;

  constructor(
    private http: HttpClient,
    private route: Router,
    private user: UserService
  ) {
    this.getUserDetails();
    this.getProductDetais();
    this.getDispatchProductDetails();
  }

  //getProductDetais()is to get all the products from the server
  public getProductDetais() {
    this.http.get(this.productUrl).subscribe(
      (result: any) => {
        this.productDetails = result;
      },
      (err: any) => {
        console.log('err', err);
        this.user.navigateToNetworkError();
      }
    );
  }

  private getCartProducts() {
    return this.http.get<any>(this.cartUrl).subscribe(
      (result: any) => {
        this.cartProductDetails = result;
      },
      (err: any) => {
        console.log('err', err);
        this.user.navigateToNetworkError();
      }
    );
  }

  public getDispatchProductDetails() {
    const customer = localStorage.getItem('name');
    return this.http.get<any>(
      `${this.baseUrl}OrderDetails?username=` + customer
    );
  }

  //getUserDetails()is to get all details of user from the server
  public getUserDetails() {
    return this.http.get(this.userUrl);
  }

  public getProducts() {
    return this.http.get(this.productUrl);
  }

  public getpaginatedProducts(page: number) {
    return this.http.get(`${this.baseUrl}products?page=${page}`);
  }
}
