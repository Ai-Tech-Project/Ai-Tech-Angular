import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: '', loadChildren: () => import('./pages/web-site/web-site.module').then(m => m.WebSiteModule) },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
