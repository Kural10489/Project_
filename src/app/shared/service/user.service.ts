import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public searchBarActivity:boolean=false;
  public authenticate!:boolean;
  public networkError:boolean=false;

  server='http://localhost:3000';
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

  return this.http.get<any>(`http://localhost:3000/user`);

}

public postRegisterationData(data:any){
  return this.http.post(this.server+'/user',data).subscribe((err:any)=>{
    console.log('err',err);
    this.navigateToNetworkError();

  });
  }

public postUniqueUsernames(data:any){
return this.http.post(this.server+'/Usernames',data).subscribe((err:any)=>{
  console.log('err',err);
  this.navigateToNetworkError();

});
}
// Usernames

public getUserName=()=>{
  return localStorage.getItem('name');
}
public logout(){
  localStorage.clear();
  this.cart.removeAllCartItems();
}


public navigateToNetworkError(){
  this.route.navigate(['networkerror'])
}
}
