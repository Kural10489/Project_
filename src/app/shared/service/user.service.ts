import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public searchBarActivity:boolean=false;
  authenticate!:boolean;
  server='http://localhost:3000';
  constructor(private cart:CartService,private http:HttpClient) {


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

public userServer(){
  return this.server;
}
public postRegisterationData(data:any){
  return this.http.post(this.server+'/user',data).subscribe();
  }
public postUniqueUsernames(data:any){
return this.http.post(this.server+'/Usernames',data).subscribe();
}
// Usernames

public getUserName=()=>{
  return localStorage.getItem('name');
}
public logout(){
  localStorage.clear();
  this.cart.removeAllCartItems();
  // this.http.delete('http://localhost:3000/Orders').subscribe();
  this.deleteAllOrders();


}
public deleteAllOrders(){

}
}
