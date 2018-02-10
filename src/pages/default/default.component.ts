import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent  {

  public email: any;
  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe( 
      (data) => {
        this.email = data['email'];
      }
    );
   }

}
