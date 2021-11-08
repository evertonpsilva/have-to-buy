import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { SocialButtonComponent } from './social-button.component';

@NgModule({
  declarations: [
    SocialButtonComponent
  ],
  imports: [
    CommonModule,
    FlexModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports: [
    SocialButtonComponent,
  ]
})
export class SocialButtonModule { }
