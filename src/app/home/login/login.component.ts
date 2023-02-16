import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/service/http.service';
import { UserService } from 'src/app/shared/service/user.service';

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

  constructor(private http:HttpClient,private httpMethod:HttpService,private form:FormBuilder,private route:Router
    ,private user:UserService){
    this.text=[];
    this.email=[];
    this.password=[];
  }

  ngOnInit(): void {
    this.loginForm=this.form.group({
      email:new FormControl ('',Validators.email),
      password:new FormControl('',Validators.minLength(4)),
      text:new FormControl ('',Validators.minLength(4))
    })

}

public onLogin(){

   this.user.existingUserDetails().subscribe(result=>{
   const user=result.find((a:any)=>{
    return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
   })
   if(user){
     localStorage.setItem('name',this.loginForm.value.text);
    localStorage.setItem('password',this.loginForm.value.password);
    this.openPopup();
  }
   else{
     this.errorPopup();
    }
  },(err:any)=>{
    console.log('err',err);
    // alert('Error in fetching User details in login page');
    this.user.navigateToNetworkError();

  });



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
