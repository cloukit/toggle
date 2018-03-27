/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitComponentTheme, CloukitIcons, CloukitStatefulAndModifierAwareElementThemeStyleDefinition
} from '@cloukit/theme';

/**
 * The default theme with round edges. It is used as default.
 */
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

    this.createStyle('wrapper', 'untoggled', 'disabled',
      this.merge(this.getStyle('wrapper', 'untoggled', 'base'), {
        style: {
          cursor: 'not-allowed',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('wrapper', 'untoggled', 'hover',
      this.merge(this.getStyle('wrapper', 'untoggled', 'base'), {
        style: {
          border: '1px solid #333',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

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

    this.createStyle('circle', 'untoggled', 'disabled',
      this.merge(this.getStyle('circle', 'untoggled', 'base'), {
        style: {
          backgroundColor: '#a8a8a8',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('circle', 'untoggled', 'hover',
      this.merge(this.getStyle('circle', 'untoggled', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconLeft', 'untoggled', 'base', {
      style: {
        position: 'absolute',
        left: '2px',
        top: '1px',
        width: '20px',
        display: 'none',
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

    this.createStyle('iconLeft', 'untoggled', 'disabled',
      this.merge(this.getStyle('iconLeft', 'untoggled', 'base'), {
        style: {
        },
        icon: {
          svgStyle: {
            fill: '#a8a8a8',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconLeft', 'untoggled', 'hover',
      this.merge(this.getStyle('iconLeft', 'untoggled', 'base'), {
        style: { },
        icon: { }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconRight', 'untoggled', 'base', {
      style: {
        width: '20px',
        position: 'absolute',
        right: '2px',
        top: '1px',
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

    this.createStyle('iconRight', 'untoggled', 'disabled',
      this.merge(this.getStyle('iconRight', 'untoggled', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconRight', 'untoggled', 'hover',
      this.merge(this.getStyle('iconRight', 'untoggled', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    //
    // TOGGLED
    //
    this.createStyle('wrapper', 'toggled', 'base',
      this.merge(this.getStyle('wrapper', 'untoggled', 'base'), {
        style: {
          backgroundColor: '#3FB13D',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('wrapper', 'toggled', 'disabled',
      this.merge(this.getStyle('wrapper', 'toggled', 'base'), {
        style: {
          cursor: 'not-allowed',
          backgroundColor: '#206D1E',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('wrapper', 'toggled', 'hover',
      this.merge(this.getStyle('wrapper', 'toggled', 'base'), {
        style: {
          border: '1px solid #333',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('circle', 'toggled', 'base',
      this.merge(this.getStyle('circle', 'untoggled', 'base'), {
        style: {
          left: '24px',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('circle', 'toggled', 'disabled',
      this.merge(this.getStyle('circle', 'toggled', 'base'), {
        style: {
          backgroundColor: '#a8a8a8',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('circle', 'toggled', 'hover',
      this.merge(this.getStyle('circle', 'toggled', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconLeft', 'toggled', 'base',
      this.merge(this.getStyle('iconLeft', 'untoggled', 'base'), {
        style: {
          display: 'block',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconLeft', 'toggled', 'disabled',
      this.merge(this.getStyle('iconLeft', 'toggled', 'base'), {
        style: {
        },
        icon: {
          svgStyle: {
            fill: '#a8a8a8',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconLeft', 'toggled', 'hover',
      this.merge(this.getStyle('iconLeft', 'toggled', 'base'), {
        style: { },
        icon: { }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconRight', 'toggled', 'base',
      this.merge(this.getStyle('iconRight', 'untoggled', 'base'), {
        style: {
          display: 'none',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconRight', 'toggled', 'disabled',
      this.merge(this.getStyle('iconRight', 'toggled', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    this.createStyle('iconRight', 'toggled', 'hover',
      this.merge(this.getStyle('iconRight', 'toggled', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
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
    const wrapperUntoggledBase = this.getElementTheme('wrapper', 'untoggled', 'base');
    wrapperUntoggledBase.styleDef.style.borderRadius = '1px';

    const wrapperUntoggledHover = this.getElementTheme('wrapper', 'untoggled', 'hover');
    wrapperUntoggledHover.styleDef.style.borderRadius = '1px';

    const wrapperUntoggledDisabled = this.getElementTheme('wrapper', 'untoggled', 'disabled');
    wrapperUntoggledDisabled.styleDef.style.borderRadius = '1px';

    const circleUntoggledBase = this.getElementTheme('circle', 'untoggled', 'base');
    circleUntoggledBase.styleDef.style.borderRadius = '1px';

    const circleUntoggledDisabled = this.getElementTheme('circle', 'untoggled', 'disabled');
    circleUntoggledDisabled.styleDef.style.borderRadius = '1px';

    const circleUntoggledHover = this.getElementTheme('circle', 'untoggled', 'hover');
    circleUntoggledHover.styleDef.style.borderRadius = '1px';

    //
    // TOGGLED
    //
    const wrapperToggledBase = this.getElementTheme('wrapper', 'toggled', 'base');
    wrapperToggledBase.styleDef.style.borderRadius = '1px';

    const wrapperToggledHover = this.getElementTheme('wrapper', 'toggled', 'hover');
    wrapperToggledHover.styleDef.style.borderRadius = '1px';

    const wrapperToggledDisabled = this.getElementTheme('wrapper', 'toggled', 'disabled');
    wrapperToggledDisabled.styleDef.style.borderRadius = '1px';

    const circleToggledBase = this.getElementTheme('circle', 'toggled', 'base');
    circleToggledBase.styleDef.style.borderRadius = '1px';

    const circleToggledDisabled = this.getElementTheme('circle', 'toggled', 'disabled');
    circleToggledDisabled.styleDef.style.borderRadius = '1px';

    const circleToggledHover = this.getElementTheme('circle', 'toggled', 'hover');
    circleToggledHover.styleDef.style.borderRadius = '1px';
  }
}
