import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { LandingComponent } from './landing/landing.component';




console.log('app root module');

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    StudentloginComponent,
    LandingComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
