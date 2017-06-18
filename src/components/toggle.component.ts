/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
const merge = (x, y) => Object.assign({}, x, y);

@Component({
  selector: 'cloukit-toggle',
  template: `
    <span
      (click)="toggleValue()"
      [ngStyle]="getStyle()"
    >
      {{getValue()}}
    </span>`,
  styles: [ ],
})
export class CloukitToggleComponent {

  @Input()
  form: FormGroup;

  @Input()
  controlName: string;

  style: any;

  constructor() {
    this.style = {};
    this.style.base = {
      color: '#fff',
      padding: '5px 10px 5px 10px',
      userSelect: 'none',
      cursor: 'pointer',
    };
    this.style.active = merge(this.style.base, {
      border: '1px solid #777',
      backgroundColor: '#2D882D',
    });
    this.style.inActive = merge(this.style.base, {
      border: '1px solid #777',
      backgroundColor: '#AA3939',
    });
  };

  toggleValue() {
    this.form.value[this.controlName] = ! this.form.value[this.controlName];
  }

  getValue() {
    return this.form.value[this.controlName] ? 'on' : 'off';
  }

  getStyle() {
    return this.form.value[this.controlName] ? this.style.active : this.style.inActive;
  }

}
