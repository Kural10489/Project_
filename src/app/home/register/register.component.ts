import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/service/cart.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private http:HttpClient,public httpMethods:HttpService,
    private route:Router,private user:UserService,private cart:CartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
  }

  registrationForm=this.fb.group({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      mobileNumber:new FormControl(null,Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)])
  });


public onSignup(){
  const postData=this.registrationForm.value;
  this.http.post(this.cart.baseUrl+'/user',postData).subscribe(response=>{console.log(response);
  });
  this.route.navigate(['']);
  }

}
