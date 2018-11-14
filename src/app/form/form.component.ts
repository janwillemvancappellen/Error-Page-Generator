import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  logo: Object;
  generateButtonText = 'Maak foutpagina';

  constructor(private data: TemplateService) {}

  ngOnInit() {
    this.page = this.data.pageObject;
    this.setDefaults();
  }

  setDefaults(): void {
    this.page.name = 'Naam site';
    this.name = this.page.name;
    this.page.logo.file = './assets/logo/ro-logo.svg';
    this.page.logo.width = 170;
    this.page.logo.height = 115;
  }

  onSelect(event, value): void {
    if (event.target.className === 'page-type') {
      this.page.type = value;
    }
    if (event.target.className === 'page-language') {
      this.page.language = value;
    }
    if (event.target.className === 'page-color') {
      this.page.color = value;
    }
  }

  onChange(name): void {
    this.page.name = name;
  }

  getLogoFile(): void {
    const logoInput: HTMLInputElement = document.querySelector('#logo');
    const file = logoInput.files[0];
    const logoImage = new Image();
    const reader = new FileReader();

    reader.readAsDataURL(file);
    logoImage.onload = () => {

    }
    
    console.log(file.size);
    if (file.type.match('image/svg')) {
      reader.onload = () => {
        logoImage.src = reader.result as string;
        logoImage.crossOrigin = 'Anonymous';
        console.log(logoImage.height);
        this.page.logo.file = logoImage.src;
        this.page.logo.width = logoImage.width;
        this.page.logo.height = logoImage.height;
        console.log(logoImage.height);
      };
      // const setImage = () => {
      //   console.log('banana3');
      //   console.log(file);
      //   console.log(reader);
      //   logoImage.src = reader.result as string;
      //   console.log(logoImage.width);
      //   logoImage.crossOrigin = 'Anonymous';
      //   this.page.logo.file = logoImage.src;
      //   this.page.logo.width = logoImage.width;
      //   this.page.logo.height = logoImage.height;
      // };
      // reader.onload = setImage();
    }
  }

  changeLogoWidth(size): void {
    this.page.logo.width = size;
    console.log(size);
  }

  changeLogoHeight(size): void {
    this.page.logo.height = size;
    console.log(size);
  }

  generatePage() {
    console.log(this.data.page);
  }
}
