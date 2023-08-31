import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes =
[
{path:'',component:LandingComponent},
{path:'loginform',component:LoginformComponent},
{path:'studentLogin',component:StudentloginComponent},
{path:'landing',component:LandingComponent},
//Lazy loading
{path:'adminLogin',loadChildren: ()=> import('./adminlogin/adminlogin.module').then(module=>module.AdminloginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
