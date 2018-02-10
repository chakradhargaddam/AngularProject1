import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators } from '@angular/forms/src/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public form: any = {

    'title': "Login Form",
    }
   
    
    public myForm: FormGroup;
    public emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    constructor(public formBUilder: FormBuilder){
      this.myForm = formBUilder.group({
       "userName": [null, Validators.compose([Validators.required])],
       "email" :  [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
       "password": [null, Validators.compose([Validators.required])],
       "confirmPassword": [null, Validators.compose([Validators.required])]
   
      });
    }
   
    displayInfo(){
      console.log(this.myForm.value);
    }
   
  



}
