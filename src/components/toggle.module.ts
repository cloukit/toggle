/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitToggleComponent } from './toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ CloukitToggleComponent ],
  declarations: [ CloukitToggleComponent ],
})
export class ToggleModule {}
