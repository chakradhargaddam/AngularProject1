import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { LoginService } from 'providers/services/login.service';

@Injectable()

export class AuthService implements CanActivate {

    constructor(public loginService: LoginService){}

    canActivate(){
        let value: boolean = this.loginService.getLogin();
        if(value){
            return true;
        }else{
            return false;
        }
    }

}