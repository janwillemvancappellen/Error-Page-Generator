import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Type } from '../type';
import { TYPES } from '../types';
import { COLORS } from '../colors';
import { LANGUAGES } from '../languages';
import { Language } from '../language';
import { Color } from '../color';
import { Page } from '../page';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() formValue = new EventEmitter<string>();

  name: string;
  types = TYPES;
  colors = COLORS;
  languages = LANGUAGES;
  selectedType: Type;
  selectedLanguage: Language;
  selectedColor: Color;
  option: HTMLCollectionOf<Element>;
  generateButtonText = 'Generate';

  constructor(private data: TemplateService) {}

  ngOnInit() {
    this.selectedType = this.types[0];
    this.selectedLanguage = this.languages[0];
    this.selectedColor = this.colors[0];
    this.data.changeTypeValue(this.selectedType.name);
    this.data.changeLanguageValue(this.selectedLanguage.name);
    this.data.changeColorValue(this.selectedColor.color);
    this.data.changeNameValue(this.name);
  }

  onSelect(event, type) {
    if (event.target.className === 'page-type') {
      this.selectedType = type;
      this.data.changeTypeValue(this.selectedType.name);
      console.log(this.selectedType);
    }
    if (event.target.className === 'page-language') {
      this.selectedLanguage = type;
      this.data.changeLanguageValue(this.selectedLanguage.name);
      console.log(this.selectedLanguage);
    }
    if (event.target.className === 'page-color') {
      this.selectedColor = type;
      this.data.changeColorValue(this.selectedColor.color);
      console.log(this.selectedColor);
    }
  }

  onChange() {
    this.data.changeNameValue(this.name);
  }

  generatePage() {
    const page = new Page(this.name, this.selectedType, this.selectedLanguage, this.selectedColor);
    console.log(page);
    return page;
  }
}
