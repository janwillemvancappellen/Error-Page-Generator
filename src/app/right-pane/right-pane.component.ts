import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TemplateService } from '../template.service';
import { Page } from '../page';
import { Type } from '../type';
import { Language } from '../language';
import { Color } from '../color';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RightPaneComponent implements OnInit {
  page: Page;

  constructor(private data: TemplateService) {}

  ngOnInit() {
    this.data.cast.subscribe(page => this.page = page);
  }
}
