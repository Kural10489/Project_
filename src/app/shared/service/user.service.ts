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
  private server='http://localhost:3000';

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
