import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import jwt_decode from "jwt-decode";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public searchBarActivity:boolean=false;
  public authenticate!:boolean;
  public networkError:boolean=false;
  private server='http://localhost:3000';
  public jwt={}
  public user:any;

  constructor(private cart:CartService
    ,private http:HttpClient
    ,private route:Router
    ){}

public isLogin=()=>{
  if(this.getUserName()){
    return true;
  }
  else{
    return false;
  }
}

public existingUserDetails(){

  return this.http.get<any>(`${this.server}`+'/user');

}
public loginDetails(data:any){
  return this.http.post(this.server+'/user',data)
}

public postRegisterationData(data:any){
  return this.http.post(this.server+'/register',data)

  }

// public postUniqueUsernames(data:any){
// return this.http.post(this.server+'/Usernames',data).subscribe((err:any)=>{
//   console.log('err',err);
//   // this.navigateToNetworkError();

// });
// }
// Usernames

public getUserName=()=>{
  return localStorage.getItem('name');

}
public getCustomerName=()=>{
   this.jwt= jwt_decode(localStorage.getItem('name')!);
   console.log(Object.values(this.jwt));
   sessionStorage.setItem("user",JSON.stringify(Object.values(this.jwt)[3]))
   return Object.values(this.jwt)[3];
}

public logout(){
  localStorage.clear();
  sessionStorage.clear();
  this.cart.removeAllCartItems();
  window.location.reload();
}


public navigateToNetworkError(){
  this.route.navigate(['networkerror'])
}
public setAuthToken(getToken:any){
if (this.getUserName()){
  console.log(this.getUserName());
  const token=getToken;
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  this.http.get(`${this.server}/OrderDetails?username=${this.getCustomerName()}`, { headers }).subscribe(data => {
    sessionStorage.setItem("orderDetails",JSON.stringify(data))
  });

}

}
}
