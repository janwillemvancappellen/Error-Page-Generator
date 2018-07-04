import { Component } from '@angular/core';
import { TYPES } from '../types';
import { COLORS } from '../colors';
import { Language } from '../language';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  types = TYPES;
  colors = COLORS;
  language: Language = {
    id: 1,
    name: 'nl',
  };

  constructor() {
    console.log(this.types);
  }
}
