import { Component } from '@angular/core';
import { Type } from '../type';
import { TYPES } from '../types';
import { COLORS } from '../colors';
import { LANGUAGES } from '../languages';
import { Language } from '../language';
import { Color } from '../color';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: '';
  types = TYPES;
  colors = COLORS;
  languages = LANGUAGES;
  selectedType: Type;
  selectedLanguage: Language;
  selectedColor: Color;
  option: HTMLCollectionOf<Element>;

  constructor() {
  }

  onSelectType(type: Type): void {
    this.selectedType = type;
    console.log(this.selectedType.name);
  }

  onSelect(event, type) {
    if (event.target.className === 'page-type') {
      this.selectedType = type;
      console.log(this.selectedType);
    }
    if (event.target.className === 'page-language') {
      this.selectedLanguage = type;
      console.log(this.selectedLanguage);
    }
    if (event.target.className === 'page-color') {
      this.selectedColor = type;
      console.log(this.selectedColor);
    }
  }
}
