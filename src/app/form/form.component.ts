import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { Color } from '../color';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  type: Type = {
    id: 1,
    name: '404'
  };
  color: Color = {
    id: 1,
    name: 'red',
    color: '#ff0000'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
