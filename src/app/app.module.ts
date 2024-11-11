import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WebSiteModule} from "./pages/web-site/web-site.module";
import { ChatbotComponent } from './pages/web-site/chatbot/chatbot.component';
import { ContactComponent } from './pages/web-site/contact/contact.component';
import { AboutComponent } from './pages/web-site/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    ContactComponent,
    AboutComponent

  ],
  imports: [
    WebSiteModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
