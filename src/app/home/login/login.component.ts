import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';
import { UserService } from 'src/app/shared/service/user.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private email:any;
  private password:any;
  private text:any;
  public loginForm!:FormGroup;
  public username='';
  public jwt={}
  public jwtTokenValue=Object.values(this.jwt)[0]
  public userLoggedIn:any;
  constructor(private http:HttpClient,private httpMethod:HttpService,private form:FormBuilder,private route:Router
    ,private user:UserService){
      this.email=[];
      this.password=[];
    }

  ngOnInit(): void {
    this.loginForm=this.form.group({
      email:new FormControl ('',Validators.email),
      password:new FormControl('',Validators.minLength(4)),

    })



}

public async onLogin(){
  const loginData={
    email:this.loginForm.value.email,
    password:this.loginForm.value.password
  }

  this.user.loginDetails(loginData)
  console.log(JSON.parse(localStorage.getItem("name")!));

   const user =JSON.parse(localStorage.getItem("name")!)
    console.log(user.password,this.loginForm.value.password);
    if( user.email===this.loginForm.value.email && user.password===this.loginForm.value.password){
      console.log("YES");
      sessionStorage.setItem('TOKEN',user.token);
      this.openPopup();
      this.jwt=jwt_decode(sessionStorage.getItem('TOKEN')!)

    }
    else{
      console.log("NO");

      this.errorPopup();
    }
  // ,error:(err:any)=>{
  //   console.log('err',err);
  //   // this.user.navigateToNetworkError();

  // }

  //  this.user.existingUserDetails().subscribe({
  //   next:(result)=>{
  //  const user=result.find((a:any)=>{
  //   this.username=a.firstName;
  //   return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
  // })
  //   if(user){
  //     localStorage.setItem('name',this.username);
  //     sessionStorage.setItem('TOKEN',user.token);
  //     this.jwt=jwt_decode(sessionStorage.getItem('TOKEN')!)

  //     console.log(this.jwtTokenValue);


  //     this.user.loginDetails(loginData)
  //     this.openPopup();
  //   }
  //   else{
  //     this.errorPopup();
  //   }
  // },error:(err:any)=>{
  //   console.log('err',err);
  //   // this.user.navigateToNetworkError();

  // }});
}


public openPopup(){
  let popup=document.getElementById('popup');
  let form=document.getElementById('form');
  popup?.classList.add('open-popup');
  form?.classList.add('formBlur');

}
public errorPopup(){
  let errorpopup=document.getElementById('Errorpopup');
  let form=document.getElementById('form');
  errorpopup?.classList.add('open-popup');
  form?.classList.add('formBlur');
}
public closeErrorPopup(){
  let errorpopup=document.getElementById('Errorpopup');
  let form=document.getElementById('form');
  errorpopup?.classList.remove('open-popup');
  this.route.navigate(['/login']);
  form?.classList.remove('formBlur');

}

public closePopup(){
  let popup=document.getElementById('popup');
  popup?.classList.remove('open-popup');
  this.route.navigate(['']);
}

}
