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
const appRoute:Routes=[
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'university',component:UniversityComponent},
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
