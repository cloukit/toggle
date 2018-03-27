<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

Import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitToggleModule } from '@cloukit/toggle';
import { CloukitThemeModule } from '@cloukit/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    CloukitThemeModule,
    CloukitToggleModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
})
// ....
```

&nbsp;

### Use the toggle

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

For more complex examples see the source code of the Demo Stories above.


