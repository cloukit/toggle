import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview.component';
import prefixAll from 'inline-style-prefixer/static';
import {
  CloukitToggleModule,
  CloukitToggleComponentThemeDefault,
  CloukitToggleComponentThemeCornered
} from '@cloukit/toggle';
import { CloukitThemeService } from '@cloukit/theme';

@Injectable()
export class MyThemeService extends CloukitThemeService {
  constructor() {
    super();
    const toggleDefaultTheme = new CloukitToggleComponentThemeDefault();
    const toggleCorneredTheme = new CloukitToggleComponentThemeCornered();
    this.registerPrefixer(prefixAll);
    this.registerComponentTheme('toggle', toggleDefaultTheme);
    this.registerComponentTheme('toggle--cornered', toggleCorneredTheme);
  }
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CloukitToggleModule
  ],
  declarations: [
    AppComponent,
    PreviewComponent,
  ],
  providers: [{ provide: CloukitThemeService, useClass: MyThemeService }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
