import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatFormFieldModule} from "@angular/material/form-field"
import{MatInputModule} from "@angular/material/input"
import { FormsModule } from "@angular/forms";
import{HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,HomeComponent,DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
