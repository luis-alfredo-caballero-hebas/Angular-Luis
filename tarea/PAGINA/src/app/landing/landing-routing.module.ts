import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTACTComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path:``,
    redirectTo: `CONTACT`
  },

  {
    path: `CONTACT`,
    component: CONTACTComponent
  },

  
  {
    path:`HOME`,
    component: HeaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
