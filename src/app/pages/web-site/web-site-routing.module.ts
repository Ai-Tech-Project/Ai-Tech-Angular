import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./fixed/main/main.component";
import {HomeComponent} from "./home/home.component";
import {ChatbotComponent} from "./chatbot/chatbot.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ServicesComponent} from "./services/services.component";
import {ResultCertifComponent} from "./result-certif/result-certif.component";
import {CertificationFormComponent} from "./certification-form/certification-form.component";
import {DescCertifComponent} from "./desc-certif/desc-certif.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: HomeComponent},
      {path:'chatbot' , component: ChatbotComponent},
      {path:'contact', component: ContactComponent},
      {path:'about', component: AboutComponent},
      {path:'services',component: ServicesComponent},
      {path:'certif',component: CertificationFormComponent},
      {path:'resultCertif',component: ResultCertifComponent},
      {path:'descCertif',component: DescCertifComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebSiteRoutingModule {
}
