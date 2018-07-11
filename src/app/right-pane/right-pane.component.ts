import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.scss']
})
export class RightPaneComponent {
  previewPage: any;

  constructor() {
    this.loadPage();
  }

  loadPage() {
    console.log('load html page');
    this.previewPage = '<object type="text/html" data="http://www.nos.nl"></object>';
  }

}
