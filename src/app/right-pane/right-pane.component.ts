import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RightPaneComponent implements OnInit {

  typeValue: string;
  languageValue: string;
  colorValue: string;
  nameValue: string;
  notFound: string;

  constructor(private data: TemplateService) {}

  ngOnInit() {
    this.data.currentType.subscribe(value => this.typeValue = value);
    this.data.currentLanguage.subscribe(value => this.languageValue = value);
    this.data.currentColor.subscribe(value => this.colorValue = value);
    this.data.currentName.subscribe(name => this.nameValue = name);
    this.data.currentNotFound.subscribe(value => this.notFound = value);
  }



}
