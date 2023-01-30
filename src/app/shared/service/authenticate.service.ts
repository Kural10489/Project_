import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private route:Router ,private user:UserService){}
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): boolean | Observable<boolean> | Promise<boolean> {
    if(this.user.isLogin()){
      return true;
    }
    else{
      this.route.navigate(['login']);
    }
    return true;
  }


}
