import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';

import { PublicService } from '../service/public.service';
import { ModalService } from '../modal/modal-service';

import { LoginPageComponent } from '../login-page/login-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LoginFormComponent } from '../login-page/form/login-form.component';
import { RegisterPageModalComponent } from '../modal/register-page-modal/register-page-modal.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ContactUsComponent,
    AboutUsComponent,
    LoginFormComponent,
    RegisterPageModalComponent
  ],
  
  imports: [ 
    PublicRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
  ]
  
})
export class PublicModule { }
