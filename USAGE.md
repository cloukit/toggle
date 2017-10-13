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

Please note that you have to import [`CloukitThemeModule`](https://cloukit.github.io/#/component/theme) and `CloukitToggleModule`.

