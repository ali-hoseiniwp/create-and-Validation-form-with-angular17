import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationInterceptor } from './authentication.interceptor';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FoodComponent } from './food/food.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationInterceptor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }