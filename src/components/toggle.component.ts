/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cloukit-toggle',
  template: `
    <div
      (click)="isActive=!isActive"
    >
      {{isActive}}
    </div>`,
  styles: [ '.demo { font-family:sans-serif' ],
})
export class CloukitToggleComponent {

  @Input()
  isActive: boolean = false;

  constructor() { }

}
