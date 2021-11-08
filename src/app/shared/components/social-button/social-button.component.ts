import { Component, Input, OnInit } from '@angular/core';
import { SocialTypesEnum } from './shared/enumns/social-types.enum';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent {

  @Input('social') social: SocialTypesEnum;
  @Input('title') title: string;

  constructor() { }

}
