import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public searchBarActivity:boolean=false;
  public authenticate!:boolean;
  public networkError:boolean=false;
  private server='http://localhost:3000';
  public jwt={}

  constructor(private cart:CartService,private http:HttpClient,private route:Router) {


  }

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
  return this.http.post(this.server+'/user',data).subscribe({
    next:(data)=>{

    },
    error:  (err:any)=>{
      console.log('err',err);
      // this.navigateToNetworkError();

    }}
  );
}

public postRegisterationData(data:any){
  return this.http.post(this.server+'/register',data).subscribe();
  }

public postUniqueUsernames(data:any){
return this.http.post(this.server+'/Usernames',data).subscribe((err:any)=>{
  console.log('err',err);
  // this.navigateToNetworkError();

});
}
// Usernames

public getUserName=()=>{
  return localStorage.getItem('name');
  // this.jwt=jwt_decode(sessionStorage.getItem('TOKEN')!)
  // return Object.values(this.jwt)[0];
  // return sessionStorage.getItem('name');

}
public getCustomerName=()=>{

  // this.jwt=jwt_decode(sessionStorage.getItem('TOKEN')!)
  // return Object.values(this.jwt)[0];


}
public logout(){
  localStorage.clear();
  sessionStorage.clear();
  this.cart.removeAllCartItems();
}


// public navigateToNetworkError(){
//   this.route.navigate(['networkerror'])
// }
}
