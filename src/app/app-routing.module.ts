import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { SignupComponent } from './signup/signup.component';
import { ConsultdoctorsComponent } from './symptoms/consultdoctors/consultdoctors.component';
import { CoronacausesComponent } from './symptoms/coronacauses/coronacauses.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'symptoms',component:SymptomsComponent,
  children:[{path:'coronacauses',component:CoronacausesComponent},
             {path:'consultdoctors',component:ConsultdoctorsComponent}
           ]},
  {path:'precaution',component:PrecautionComponent},
  {path:'images',component:ImagesComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'footer',component:FooterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
