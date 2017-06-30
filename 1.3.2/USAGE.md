<!-- !!! will be dynamically included into cloukit.github.io component doc !!! -->
<!-- !!! DO NOT USE UNECESSARY MARRKUP THAT BREAKS THE CORPORATE DESIGN !!! -->

Use toggle inside your [Reactive Forms](https://angular.io/guide/reactive-forms).

```html
<cloukit-toggle
  formControlName="isCatDead"
></cloukit-toggle>
```

And if you want to use a specific theme use:

```html
<cloukit-toggle
  formControlName="isCatDead"
  theme="toggle-custom"
></cloukit-toggle>
```

But make sure you register that theme in the themeService properly.
