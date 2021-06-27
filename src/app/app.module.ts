import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { ImagesComponent } from './images/images.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CoronacausesComponent } from './symptoms/coronacauses/coronacauses.component';
import { ConsultdoctorsComponent } from './symptoms/consultdoctors/consultdoctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SymptomsComponent,
    PrecautionComponent,
    ImagesComponent,
    ContactusComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    PagenotfoundComponent,
    CoronacausesComponent,
    ConsultdoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
