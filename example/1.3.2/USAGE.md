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


Of yourse you will need to import the `CloukitToggleModule` and inject it into your main `NgModule`.
The minimal configuration that would use the default theme looks like this. See `app.module.ts` file below for
a complexer setup.

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
