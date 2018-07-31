import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private typeValue = new BehaviorSubject<string>('');
  private languageValue = new BehaviorSubject<string>('');
  private colorValue = new BehaviorSubject<string>('');
  private nameValue = new BehaviorSubject('');
  private notFoundValue = new BehaviorSubject('');
  currentType = this.typeValue.asObservable();
  currentLanguage = this.languageValue.asObservable();
  currentColor = this.colorValue.asObservable();
  currentName = this.nameValue.asObservable();
  currentNotFound = this.notFoundValue.asObservable();

  changeTypeValue(type: string) {
    this.typeValue.next(type);
  }

  changeLanguageValue(type: string) {
    this.languageValue.next(type);
    if (type === 'nl') {
      this.notFoundValue.next('Niet gevonden');
    } else {
      this.notFoundValue.next('Not found');
    }
  }

  changeColorValue(type: string) {
    this.colorValue.next(type);
  }

  changeNameValue(name: string) {
    this.nameValue.next(name);
  }


}
