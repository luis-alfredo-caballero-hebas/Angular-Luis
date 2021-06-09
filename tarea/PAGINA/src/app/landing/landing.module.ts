import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HeaderComponent } from './header/header.component';
import { HOMEComponent } from './home/home.component';
import { CONTACTComponent } from './contact/contact.component';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HOMEComponent,
    CONTACTComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
