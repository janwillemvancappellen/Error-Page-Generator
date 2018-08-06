import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page } from './page';
import { TYPES } from './types';
import { LANGUAGES } from './languages';
import { COLORS } from './colors';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  types = TYPES;
  languages = LANGUAGES;
  colors = COLORS;

  pageObject = new Page('Site name', this.types[0], this.languages[0], this.colors[0]);
  page = new BehaviorSubject<Page>(this.pageObject);

  cast = this.page.asObservable();

  updatePage(page: Page) {
    console.dir(this.page);
    this.page.next(page);
  }
}
