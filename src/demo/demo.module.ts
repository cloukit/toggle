import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CloukitThemeModule, CloukitThemeService } from '@cloukit/theme';
import { DemoComponent } from './demo.component';
import {
  CloukitToggleModule,
  CloukitToggleComponentThemeCornered,
} from '../index';

@NgModule({
  declarations: [ DemoComponent ],
  exports: [ DemoComponent ],
  imports: [ CommonModule, ReactiveFormsModule, CloukitThemeModule, CloukitToggleModule ],
  providers: [ ],
  bootstrap: [ ]
})
export class DemoModule {
  constructor(private cloukitThemeService: CloukitThemeService) {
    // Note: The default theme is already registered by the toggle.module itself
    // So we just register our custom cornered theme here
    this.cloukitThemeService.registerComponentTheme('toggle--cornered',
      new CloukitToggleComponentThemeCornered());
  }
}
