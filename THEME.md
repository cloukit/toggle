To be able to write a custom theme you need to know about the elements, uiStates and uiModifiers.
This graphic shows you all elements with their states and modifiers.

cloukitSvg:https://cloukit.github.io/toggle/themeing/cloukit-toggle-decomposed.svg

cloukitSvg:https://cloukit.github.io/toggle/themeing/cloukit-toggle-states-and-modifiers.svg

Below you can see the two themes provided by toggle. You can easily extend one of the existing themes and change it to your needs. But do not forget to register it at the [`cloukitThemeService`](https://cloukit.github.io/#/guide/themeing).

A new theme with a red outline would be created like so:

```typescript
import { CloukitToggleComponentThemeDefault } from '@cloukit/toggle';

export class MyRedToggleTheme extends CloukitToggleComponentThemeDefault {
  constructor() {
    super();
    const wrapperUntoggledBase = this.getElementTheme('wrapper', 'untoggled', 'base');
    wrapperUntoggledBase.styleDef.style.borderColor = 'red';
  }
}
```
