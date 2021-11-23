import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordConformationComponent } from './forgot-password-conformation/forgot-password-conformation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterConformationComponent } from './register-conformation/register-conformation.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordConformationComponent } from './reset-password-conformation/reset-password-conformation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerconfirmation', component: RegisterConformationComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'forgotpasswordconfirmation', component: ForgotPasswordConformationComponent },
  { path: 'resetpassword/:token', component: ResetPasswordComponent },
  { path: 'resetpasswordconfirmation', component: ResetPasswordConformationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
