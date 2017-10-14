/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitToggleComponent } from './toggle.component';
import { FormsModule } from '@angular/forms';
import { CloukitThemeService } from '@cloukit/theme';
import { CloukitToggleComponentThemeCornered, CloukitToggleComponentThemeDefault } from './toggle.theme';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ CloukitToggleComponent ],
  declarations: [ CloukitToggleComponent ],
})
export class CloukitToggleModule {
  constructor(private themeService: CloukitThemeService) {
    if (this.themeService.getComponentTheme('toggle') === null) {
      this.themeService.registerComponentTheme('toggle', new CloukitToggleComponentThemeDefault());
    }
    if (this.themeService.getComponentTheme('toggle--cornered') === null) {
      this.themeService.registerComponentTheme('toggle--cornered', new CloukitToggleComponentThemeCornered());
    }
  }
}
