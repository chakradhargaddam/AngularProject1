import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'pages/login/login.component';
import { RegisterComponent } from 'pages/register/register.component';
import { HomeComponent } from 'pages/home/home.component';
import { DefaultComponent } from 'pages/default/default.component';
import { AboutusComponent } from 'pages/aboutus/aboutus.component';
import { AuthService } from 'providers/services/auth.guard';


const appRoutes: Routes = [
    { path: 'login' , component: LoginComponent},
    { path: 'register' , component: RegisterComponent},
    { path:'home', component: HomeComponent, children: [
        {path: 'default/:email', component: DefaultComponent, canActivate: [AuthService] },
        {path: 'aboutus', component: AboutusComponent, canActivate: [AuthService]}
    ]},
    { path: '' , redirectTo: 'login', pathMatch: 'full'}
]


@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}







