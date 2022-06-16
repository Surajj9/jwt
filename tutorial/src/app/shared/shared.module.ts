import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import{MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,RouterModule,FlexLayoutModule,MatTableModule
  ],exports:[
    HeaderComponent,SidebarComponent,FooterComponent
  ]
})
export class SharedModule { }
