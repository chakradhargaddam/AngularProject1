import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators } from '@angular/forms/src/validators';
import { Router } from '@angular/router/src/router';
import { LoginService } from 'providers/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

   public form: any = {
    'title': "Login",
    'password': "Lost your password?"
  };

  public loginForm: FormGroup;
  public 	email: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public formBUilder: FormBuilder, public router: Router, public loginService: LoginService) {
    this.loginForm = formBUilder.group({
      "username": [null, Validators.compose([Validators.required, Validators.pattern(this.email)])],
      "password": [null, Validators.compose([Validators.required])]
    });
   }

  loginUser(){
    console.log(this.loginForm.value);
    console.log("hello"); 
    this.loginService.setLogin(true);
    this.router.navigateByUrl('home/default/'+this.loginForm.value['username']);
  } 

  goToRegister(){
    //this.router.navigate(['register']);
    this.router.navigateByUrl('register');
    console.log("regiter clicked");
  }

}
