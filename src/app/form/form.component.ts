import { Component } from '@angular/core';
import { TYPES } from '../types';
import { COLORS } from '../colors';
import { LANGUAGES } from '../languages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  types = TYPES;
  colors = COLORS;
  languages = LANGUAGES;

  constructor() {
    console.log(this.types);
  }
}
