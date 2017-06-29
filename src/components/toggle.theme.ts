/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitComponentTheme, CloukitIcons, CloukitStatefulAndModifierAwareElementThemeStyleDefinition
} from '@cloukit/theme';

export class CloukitToggleComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // UNTOGGLED
    //
    this.createStyle('wrapper', 'untoggled', 'base', {
      style: {
        border: '1px solid #555',
        borderRadius: '12px',
        position: 'relative',
        padding: '2px',
        userSelect: 'none',
        cursor: 'pointer',
        width: '40px',
        height: '18px',
        display: 'inline-block',
        backgroundColor: '#777',
        transition: 'background-color 300ms linear',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('circle', 'untoggled', 'base', {
      style: {
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        position: 'absolute',
        left: '2px',
        backgroundColor: '#fff',
        userSelect: 'none',
        transition: 'left 300ms linear',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('iconLeft', 'untoggled', 'base', {
      style: {
        width: '20px',
        display: 'none',
        marginTop: '-1px',
      },
      icon: {
        svgPathD: CloukitIcons.success,
        svgStyle: {
          fill: '#fff',
          transform: 'translate(3px, 2px)',
          transition: 'fill 2s',
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('iconRight', 'untoggled', 'base', {
      style: {
        width: '20px',
        paddingLeft: '20px',
        marginTop: '-1px',
      },
      icon: {
        svgPathD: CloukitIcons.failure,
        svgStyle: {
          fill: '#fff',
          transform: 'translate(3px, 2px)',
          transition: 'fill 2s',
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    //
    // TOGGLED
    //
    this.createStyle('wrapper', 'toggled', 'base', this.merge(this.getStyle('wrapper', 'untoggled', 'base'), {
      style: {
        backgroundColor: '#3FB13D',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));


    this.createStyle('circle', 'toggled', 'base', this.merge(this.getStyle('circle', 'untoggled', 'base'), {
      style: {
        left: '24px'
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconLeft', 'toggled', 'base', this.merge(this.getStyle('iconLeft', 'untoggled', 'base'), {
      style: {
        display: 'inline-block',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconRight', 'toggled', 'base', this.merge(this.getStyle('iconRight', 'untoggled', 'base'), {
      style: {
        display: 'none',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }

}

export class CloukitToggleComponentThemeCornered extends CloukitToggleComponentThemeDefault {

  constructor() {
    super();
    //
    // UNTOGGLED
    //
    const wrapperUntoggledBase = this.getElementTheme('wrapper', 'untoggled', 'base');
    wrapperUntoggledBase.styleDef.style.borderRadius = '1px';

    const circleUntoggledBase = this.getElementTheme('circle', 'untoggled', 'base');
    circleUntoggledBase.styleDef.style.borderRadius = '1px';

    //
    // TOGGLED
    //
    const wrapperToggledBase = this.getElementTheme('wrapper', 'toggled', 'base');
    wrapperToggledBase.styleDef.style.borderRadius = '1px';

    const circleToggledBase = this.getElementTheme('circle', 'toggled', 'base');
    circleToggledBase.styleDef.style.borderRadius = '1px';
  }
}
