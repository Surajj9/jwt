import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
   
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,FullwidthModule, BrowserAnimationsModule,SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
