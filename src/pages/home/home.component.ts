import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router/src/router';
import { LoginService } from 'providers/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  public email: any;
  constructor(public route: ActivatedRoute, public router: Router, public loginservice: LoginService) {
    this.route.params.subscribe( 
      (data) => {
        this.email = data['email'];
      }
    );
   }

   aboutus(){
    this.router.navigateByUrl('home/aboutus'); 
   }

   default(){
    this.router.navigateByUrl('home/default/'+"gani2920@gmail.com"); 
   }

   logout(){
    this.loginservice.setLogin(false);
    this.router.navigateByUrl('login'); 
   }

}
