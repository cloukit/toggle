/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, forwardRef, Optional } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CloukitToggleComponentThemeDefault } from './toggle.theme';
import {
  CloukitComponentTheme, CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
  CloukitThemeService
} from '@cloukit/theme';
import { noop } from 'rxjs/util/noop';

export const CLOUKIT_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CloukitToggleComponent),
  multi: true
};

@Component({
  selector: 'cloukit-toggle',
  template: `
    <span 
      (click)="toggleValue()"
      [ngStyle]="getStyle('wrapper').style"
    >
      <svg
        viewBox="0 0 512 512"
        [ngStyle]="getStyle('iconLeft').style"
      >
        <path
          [ngStyle]="getStyle('iconLeft').icon.svgStyle"
          [attr.d]="getStyle('iconLeft').icon.svgPathD"
        ></path>
      </svg>
      <svg
        viewBox="0 0 512 512"
        [ngStyle]="getStyle('iconRight').style"
      >
        <path
          [ngStyle]="getStyle('iconRight').icon.svgStyle"
          [attr.d]="getStyle('iconRight').icon.svgPathD"
        ></path>
      </svg>
    </span>`,
  styles: [ ],
  providers: [ CLOUKIT_TOGGLE_VALUE_ACCESSOR ],
})
export class CloukitToggleComponent implements ControlValueAccessor {

  themeService: CloukitThemeService;
  theme: CloukitComponentTheme;
  state = {
    internalValue: false,
    isDisabled: false,
    uiModifier: 'base',
    uiState: 'untoggled',
  };

  getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    return this.theme.getStyle(element, this.state.uiState, this.state.uiModifier);
  }

  updateUiModifierAndState() {
    if (this.state.isDisabled) {
      this.state.uiModifier = 'disabled';
    } else {
      this.state.uiModifier = 'base';
    }
    if (this.state.internalValue) {
      this.state.uiState = 'toggled'
    } else {
      this.state.uiState = 'untoggled';
    }
  }

  // will be overridden on init
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor(@Optional() themeService: CloukitThemeService) {
    if (themeService === null) {
      this.themeService = new CloukitThemeService();
      this.themeService.registerComponentTheme('toggle', new CloukitToggleComponentThemeDefault());
    } else {
      this.themeService = themeService;
    }
    this.theme = this.themeService.getComponentTheme('toggle');
  }

  // @Overrides -> ControlValueAccessor
  writeValue(value: any): void {
    if (value !== this.state.internalValue) {
      this.state.internalValue = value;
      this.updateUiModifierAndState();
    }
  }

  // @Overrides -> ControlValueAccessor
  setDisabledState(isDisabled: boolean): void {
    this.state.isDisabled = isDisabled;
    this.updateUiModifierAndState();
  }

  // @Overrides -> ControlValueAccessor
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
    this.updateUiModifierAndState();
  }

  // @Overrides -> ControlValueAccessor
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
    this.updateUiModifierAndState();
  }

  // @Overrides -> ControlValueAccessor
  setValue(value: boolean) {
    if (value !== this.state.internalValue) {
      this.state.internalValue = value;
      this.onChangeCallback(value);
      this.updateUiModifierAndState();
    }
  }

  // @Overrides -> ControlValueAccessor
  getValue(): boolean {
    return this.state.internalValue;
  }

  toggleValue() {
    if (!this.state.isDisabled) {
      this.setValue(!this.state.internalValue);
    }
  }

}
