import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[ReactiveFormsModule],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Check valid email address',()=>{
    let email= component.registrationForm.controls['email'];
    email.setValue('kuralanban5@gmail.com');
    expect(email.valid).toBeTruthy();
    expect(email.errors).toBeNull();
  });
  // Password cases
  it('Password Validity check 1',()=>{
    let password= component.registrationForm.controls['password'];
    password.setValue('Dumbbells#5');
    expect(password.valid).toBeTruthy();
    expect(password.errors).toBeNull();
  });
  it('Password Validity check 2',()=>{
    let password= component.registrationForm.controls['password'];
    password.setValue('#kuralanban6');
    expect(password.valid).toBeTruthy();
    expect(password.errors).toBeNull();
  });
  it('Password Validity check 3',()=>{
    let password= component.registrationForm.controls['password'];
    password.setValue('0umbbe#lls#');
    expect(password.valid).toBeTruthy();
    expect(password.errors).toBeNull();
  });
});
