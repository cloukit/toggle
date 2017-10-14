import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CloukitThemeModule } from '@cloukit/theme';
import { DemoComponent } from './demo.component';
import { CloukitToggleModule } from '../index';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, ReactiveFormsModule, CloukitThemeModule, CloukitToggleModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {}
