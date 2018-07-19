import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { TYPES } from '../types';
import { COLORS } from '../colors';
import { LANGUAGES } from '../languages';
import { Language } from '../language';
import { Color } from '../color';
import { Page } from '../page';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: string;
  types = TYPES;
  colors = COLORS;
  languages = LANGUAGES;
  selectedType: Type;
  selectedLanguage: Language;
  selectedColor: Color;
  option: HTMLCollectionOf<Element>;
  generateButtonText = 'Generate';

  constructor() {}

  ngOnInit() {
    this.selectedType = this.types[0];
    this.selectedLanguage = this.languages[0];
    this.selectedColor = this.colors[0];
    this.name = 'Site naam';
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

  generatePage() {
    const page = new Page(this.name, this.selectedType, this.selectedLanguage, this.selectedColor);
    console.log(page);
    return page;
  }
}
