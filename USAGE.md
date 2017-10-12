<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

Use toggle inside your [Reactive Forms](https://angular.io/guide/reactive-forms) like so.

```html
<form [formGroup]="form">
  ...
  <cloukit-toggle
    formControlName="isCatDead"
  ></cloukit-toggle>
  ...
</form>
```

And if you want to use a specific theme use:

```html
<cloukit-toggle
  formControlName="isCatDead"
  theme="toggle-custom"
></cloukit-toggle>
```

But make sure you register that theme in the [`CloukitThemeService`](https://cloukit.github.io/#/component/theme) properly.


Of course you will need to import the `CloukitToggleModule` and inject it into your main `NgModule`.
The minimal configuration that would use the default theme looks like this.

```typescript
// (1) Import the Module
import { CloukitToggleModule } from '@cloukit/toggle';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // (2) Register it under 'imports'
    CloukitToggleModule
  ],
  declarations: [ /* ... */ ],
  providers: [ /* ... */ ],
  bootstrap: [ /* ... */ ]
})
export class AppModule {}
```

The complex use case with custom themes looks like this.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoComponent } from '../demo/demo.component';
import { CloukitThemeService } from '@cloukit/theme';
import {
  CloukitToggleModule,
  CloukitToggleComponentThemeDefault,
  CloukitToggleComponentThemeCornered
} from '@cloukit/toggle';

// Use a real CSS Prefixer in real live
const prefixAll = (x) => x;

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
  declarations: [ AppComponent, DemoComponent ],
  imports: [ BrowserModule, ReactiveFormsModule, CloukitToggleModule ],
  providers: [{ provide: CloukitThemeService, useClass: MyThemeService }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
