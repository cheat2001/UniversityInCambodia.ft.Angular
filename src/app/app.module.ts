import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes ,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UniversityComponent } from './university/university.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { RuppComponent } from './rupp/rupp.component';
import { VandaComponent } from './vanda/vanda.component';
import { ProfileComponent } from './profile/profile.component';
const appRoute:Routes=[
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'university',component:UniversityComponent},
  {path:'university/:id',component:UniversityDetailComponent},
  {path:'about-us',component:AboutUsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UniversityComponent,
    AboutUsComponent,
    MobileNavbarComponent,
    CardComponent,
    FooterComponent,
    UniversityDetailComponent,
    RuppComponent,
    VandaComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
