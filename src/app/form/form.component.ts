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

  page: Page;
  name: string;
  types = TYPES;
  colors = COLORS;
  languages = LANGUAGES;
  selectedType: Type;
  selectedLanguage: Language;
  selectedColor: Color;
  option: HTMLCollectionOf<Element>;
  generateButtonText = 'Create';

  constructor(private data: TemplateService) {}

  ngOnInit() {
    this.page = this.data.pageObject;
  }

  onSelect(event, value) {
    if (event.target.className === 'page-type') {
      this.page.type = value;
      this.data.updatePage(this.page);
    }
    if (event.target.className === 'page-language') {
      this.page.language = value;
      this.data.updatePage(this.page);
    }
    if (event.target.className === 'page-color') {
      this.page.color = value;
      this.data.updatePage(this.page);
    }
  }

  onChange(name) {
    this.page.name = name;
    this.data.updatePage(this.page);
  }

  generatePage() {
    console.log(this.data.page);
  }
}
