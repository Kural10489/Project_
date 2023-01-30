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
    return a.Email===this.loginForm.value.email && a.Password===this.loginForm.value.password
   })
   if(user){
    //  alert("login Sucess");
     // this.SnackBar.open('Login Sucess','',{duration:4000, verticalPosition:'top',panelClass:['snackBar']});
     localStorage.setItem('name',this.loginForm.value.text);
     localStorage.setItem('password',this.loginForm.value.password);
     this.openPopup();
    // this.route.navigate(['']);
   }
   else{
    alert('User not found');
   }
  });

}
public openPopup(){
  let popup=document.getElementById('popup');
  let form=document.getElementById('form');
  popup?.classList.add('open-popup');
  form?.classList.add('formBlur');

}

public closePopup(){
  let popup=document.getElementById('popup');
  popup?.classList.remove('open-popup');
  this.route.navigate(['']);
}
}
