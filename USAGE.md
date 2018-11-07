<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

### Initial Setup

First install needed peerDependencies.

```
yarn add @cloukit/theme
```

Then import the needed modules in your main module.

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// (1) Package Imports
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitToggleModule } from '@cloukit/toggle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // (2) Register Imports
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


&nbsp;

### Version Compatibility

You can read the [release comments](https://github.com/cloukit/toggle/releases) for full details.

Please mind the the compatibility chart

| Angular Version | Cloukit Component Version |
|-----------------|---------------------------|
| >=7.0.0         | 7.0.0 - current           |
| >=6.0.0         | 6.0.0 - 6.0.2             |
| >=5.0.0         | 1.8.0 - 1.9.1             |
| >=4.0.0         | 1.0.0 - 1.7.0             |

To install a specific version use:

```
yarn add @cloukit/toggle@1.7.0
```
