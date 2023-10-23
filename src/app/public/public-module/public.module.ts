import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';

import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
