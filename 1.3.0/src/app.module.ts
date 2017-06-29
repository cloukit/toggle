import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview.component';
import prefixAll from 'inline-style-prefixer/static';
import { CloukitToggleModule, CloukitToggleComponentThemeDefault } from '@cloukit/toggle';
import { CloukitThemeService } from '@cloukit/theme';

@Injectable()
export class MyThemeService extends CloukitThemeService {
  constructor() {
    super();
    const myToggleTheme = new CloukitToggleComponentThemeDefault();
    this.registerPrefixer(prefixAll);
    this.registerComponentTheme('toggle', myToggleTheme);
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
