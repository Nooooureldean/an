import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ControlContainer } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { UsenameComponent } from './usename/usename.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home' ,component:HomeComponent},
    {path:'about' ,component:AboutComponent},
    {path:'protfolio' ,component:PortfolioComponent},
{path:'contact',component:ContactComponent, children:[{path:'username',component:UsenameComponent}]} ];
