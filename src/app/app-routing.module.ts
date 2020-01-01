import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CopyrightComponent } from './copyright/copyright.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'terms', component: TermsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
