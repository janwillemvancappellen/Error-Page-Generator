import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeftPaneComponent implements OnInit {
  title = 'Error Page Generator';

  constructor() { }

  ngOnInit() {
  }

}
