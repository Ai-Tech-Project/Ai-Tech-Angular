import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './fixed/footer/footer.component';
import { MainComponent } from './fixed/main/main.component';
import { NavbarComponent } from './fixed/navbar/navbar.component';
import {WebSiteRoutingModule} from "./web-site-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebSiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class WebSiteModule { }
