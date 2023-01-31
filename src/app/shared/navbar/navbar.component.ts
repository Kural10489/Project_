import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public searchTerm:string='';

  constructor(public cart:CartService,public route:Router,public user:UserService){}

/*search() has a parameter event used to target the
  input value by the user and send the data to another component by
  using the search method in service which has behavior subject

*/
public search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  this.cart.search.next(this.searchTerm);
  }

public navigateToCart(){
    this.route.navigate(['cart']);
  }

public showSearch(){
this.user.searchBarActivity=true;
}
public hideSearch(){
  this.user.searchBarActivity=false;
}
}
