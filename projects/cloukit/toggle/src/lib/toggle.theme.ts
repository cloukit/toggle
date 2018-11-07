/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitBaseCssDefinitions,
  CloukitComponentTheme,
  CloukitIconDefinition,
  CloukitSvgCssDefinitions,
} from '@cloukit/theme';

const check = 'M386.76 136L203.024 316.723l-78.016-76.74L95 269.502l78.02 76.74 30.005 29.513 213.745-210.24';
const cross = 'M384.676 161.08l-31.6-31.08-96.738 95.153L159.598 130 128 161.08l96.74 95.152L128 351.385l31.6 31.08 96.738-95.155 96.74 95.153 31.597-31.08-96.74-95.15';

/**
 * The default theme with round edges. It is used as default.
 */
export class CloukitToggleComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // UNTOGGLED
    //
    this.buildStyle('wrapper', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
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
      });

    this.buildStyle('wrapper', 'untoggled', 'disabled')
      .inheritFrom('wrapper', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        cursor: 'not-allowed',
      });

    this.buildStyle('wrapper', 'untoggled', 'hover')
      .inheritFrom('wrapper', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #333',
      });

    this.buildStyle('circle', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        position: 'absolute',
        left: '2px',
        backgroundColor: '#fff',
        userSelect: 'none',
        transition: 'left 300ms linear',
      });

    this.buildStyle('circle', 'untoggled', 'disabled')
      .inheritFrom('circle', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#a8a8a8',
      });

    this.buildStyle('circle', 'untoggled', 'hover')
      .inheritFrom('circle', 'untoggled', 'base');

    this.buildStyle('iconLeft', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        position: 'absolute',
        left: '2px',
        top: '1px',
        width: '20px',
        display: 'none',
      })
      .withIcon(<CloukitIconDefinition>{
        svgPathD: check,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#fff',
        transform: 'translate(3px, 2px)',
        transition: 'fill 2s',
      });

    this.buildStyle('iconLeft', 'untoggled', 'disabled')
      .inheritFrom('iconLeft', 'untoggled', 'base')
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#a8a8a8',
      });

    this.buildStyle('iconLeft', 'untoggled', 'hover')
      .inheritFrom('iconLeft', 'untoggled', 'base');

    this.buildStyle('iconRight', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        width: '20px',
        position: 'absolute',
        right: '2px',
        top: '1px',
      })
      .withIcon(<CloukitIconDefinition>{
        svgPathD: cross,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#fff',
        transform: 'translate(3px, 2px)',
        transition: 'fill 2s',
      });

    this.buildStyle('iconRight', 'untoggled', 'disabled')
      .inheritFrom('iconRight', 'untoggled', 'base');

    this.buildStyle('iconRight', 'untoggled', 'hover')
      .inheritFrom('iconRight', 'untoggled', 'base');

    //
    // TOGGLED
    //
    this.buildStyle('wrapper', 'toggled', 'base')
      .inheritFrom('wrapper', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#3FB13D',
      });

    this.buildStyle('wrapper', 'toggled', 'disabled')
      .inheritFrom('wrapper', 'toggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        cursor: 'not-allowed',
        backgroundColor: '#206D1E',
      });

    this.buildStyle('wrapper', 'toggled', 'hover')
      .inheritFrom('wrapper', 'toggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #333',
      });

    this.buildStyle('circle', 'toggled', 'base')
      .inheritFrom('circle', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        left: '24px',
      });

    this.buildStyle('circle', 'toggled', 'disabled')
      .inheritFrom('circle', 'toggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#a8a8a8',
      });

    this.buildStyle('circle', 'toggled', 'hover')
      .inheritFrom('circle', 'toggled', 'base');

    this.buildStyle('iconLeft', 'toggled', 'base')
      .inheritFrom('iconLeft', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        display: 'block',
      });

    this.buildStyle('iconLeft', 'toggled', 'disabled')
      .inheritFrom('iconLeft', 'toggled', 'base')
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#a8a8a8',
      });

    this.buildStyle('iconLeft', 'toggled', 'hover')
      .inheritFrom('iconLeft', 'toggled', 'base');

    this.buildStyle('iconRight', 'toggled', 'base')
      .inheritFrom('iconRight', 'untoggled', 'base')
      .withIconStyles(<CloukitSvgCssDefinitions>{
        display: 'none',
      });

    this.buildStyle('iconRight', 'toggled', 'disabled')
      .inheritFrom('iconRight', 'toggled', 'base');

    this.buildStyle('iconRight', 'toggled', 'hover')
      .inheritFrom('iconRight', 'toggled', 'base');
  }

}

/**
 * The cornered theme with square edges. See the
 * [Themeing Guide]{@link https://cloukit.github.io/#/guide/themeing} on how to
 * use other themes like `cornered`.
 */
export class CloukitToggleComponentThemeCornered extends CloukitToggleComponentThemeDefault {

  constructor() {
    super();
    //
    // UNTOGGLED
    //
    this.buildStyle('wrapper', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('wrapper', 'untoggled', 'hover')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('wrapper', 'untoggled', 'disabled')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('circle', 'untoggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('circle', 'untoggled', 'disabled')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('circle', 'untoggled', 'hover')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    //
    // TOGGLED
    //
    this.buildStyle('wrapper', 'toggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('wrapper', 'toggled', 'hover')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('wrapper', 'toggled', 'disabled')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('circle', 'toggled', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('circle', 'toggled', 'disabled')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });

    this.buildStyle('circle', 'toggled', 'hover')
      .withStyles(<CloukitBaseCssDefinitions>{
        borderRadius: '1px'
      });
  }
}
