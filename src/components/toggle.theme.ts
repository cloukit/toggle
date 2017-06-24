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
        border: '2px solid #555',
        padding: '2px',
        userSelect: 'none',
        cursor: 'pointer',
        width: '40px',
        display: 'inline-block',
        backgroundColor: '#777',
        transition: 'background-color 300ms linear',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('iconLeft', 'untoggled', 'base', {
      style: {
        width: '20px',
        transition: 'fill 2s',
        display: 'none',
      },
      icon: {
        svgPathD: CloukitIcons.success,
        svgStyle: {
          fill: '#fff',
          transform: 'translate(25px, 130px)'
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('iconRight', 'untoggled', 'base', {
      style: {
        width: '20px',
        transition: 'fill 2s',
        paddingLeft: '20px',
      },
      icon: {
        svgPathD: CloukitIcons.failure,
        svgStyle: {
          fill: '#fff',
          transform: 'translate(25px, 130px)'
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

    this.createStyle('iconLeft', 'toggled', 'base', {
      style: {
        width: '20px',
        transition: 'fill 2s',
      },
      icon: {
        svgPathD: CloukitIcons.success,
        svgStyle: {
          fill: '#fff',
          transform: 'translate(25px, 130px)'
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('iconRight', 'toggled', 'base', {
      style: {
        width: '20px',
        transition: 'fill 2s',
        display: 'none',
      },
      icon: {
        svgPathD: CloukitIcons.success,
        svgStyle: {
          fill: '#fff',
          transform: 'translate(25px, 130px)'
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
  }

}
