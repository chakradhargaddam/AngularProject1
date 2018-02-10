import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';

@Injectable()

export class LoginService  {

    public isLogin: boolean = false;
    constructor() { }

    setLogin(value: boolean) {
        this.isLogin = value;
    }

    getLogin(){
        return this.isLogin;
    }
}