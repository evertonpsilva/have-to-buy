import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SocialButtonModule } from '../../shared/components/social-button/social-button.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    FlexModule,
    FlexLayoutModule,
    SocialButtonModule
  ]
})
export class LoginModule { }
