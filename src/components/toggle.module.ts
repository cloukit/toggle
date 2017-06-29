/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CloukitToggleComponent } from './toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, BrowserModule, FormsModule ],
  exports: [ CloukitToggleComponent ],
  declarations: [ CloukitToggleComponent ],
})
export class ToggleModule {}
