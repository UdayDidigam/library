import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { RegisterConformationComponent } from './register-conformation/register-conformation.component';
import { ForgotPasswordConformationComponent } from './forgot-password-conformation/forgot-password-conformation.component';
import { ResetPasswordConformationComponent } from './reset-password-conformation/reset-password-conformation.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RegisterComponent,
    RegisterConformationComponent,
    ForgotPasswordConformationComponent,
    ResetPasswordConformationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
