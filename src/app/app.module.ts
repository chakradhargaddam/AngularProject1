import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from 'pages/login/login.component';
import { RegisterComponent } from 'pages/register/register.component';
import { AppRoutingModule } from 'app/app.routing';
import { HomeComponent } from 'pages/home/home.component';
import { DefaultComponent } from 'pages/default/default.component';
import { AboutusComponent } from 'pages/aboutus/aboutus.component';
import { AuthService } from 'providers/services/auth.guard';
import { LoginService } from 'providers/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DefaultComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
