import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule,
   MatButtonModule,
   MatToolbarModule,
    MatExpansionModule
  } from '@angular/material';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    NewsComponent,
    HeaderComponent,
    TermsComponent,
    PrivacyComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatInputModule,
    MatButtonModule,
    MatToolbarModule,
     MatExpansionModule,
     MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
