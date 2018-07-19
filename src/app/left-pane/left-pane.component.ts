import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeftPaneComponent {
  title = 'Error Page Generator';

  constructor() { }

}
