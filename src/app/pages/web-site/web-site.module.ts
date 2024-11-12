import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './fixed/footer/footer.component';
import { MainComponent } from './fixed/main/main.component';
import { NavbarComponent } from './fixed/navbar/navbar.component';
import {WebSiteRoutingModule} from "./web-site-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ResultCertifComponent } from './result-certif/result-certif.component';
import {CertificationFormComponent} from "./certification-form/certification-form.component";
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { DescCertifComponent } from './desc-certif/desc-certif.component';



@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ResultCertifComponent,
    CertificationFormComponent,
    QuizResultComponent,
    DescCertifComponent,
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
