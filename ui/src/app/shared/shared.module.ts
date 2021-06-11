import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IsUsernameExitsPasswordDirective } from './directives/is-username-exits-password.directive';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';
import { FormFocusDirective } from './directives/form-focus.directive';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IsUsernameExitsPasswordDirective,
    ConfirmPasswordValidatorDirective,
    FormFocusDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IsUsernameExitsPasswordDirective,
    FormFocusDirective,
    // ToastrModule,
    // BrowserAnimationsModule,
  ]
})
export class SharedModule { }
