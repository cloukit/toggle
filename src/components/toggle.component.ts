/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Component, forwardRef, Input, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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

/**
 * Toggle Component can be used inside a Reactive Form for a boolean.
 *
 * Just use this inside your templates:
 *
 * ```html
 * <cloukit-toggle
 *   formControlName="myBoolean"
 * ></cloukit-toggle>
 * ```
 */
@Component({
  selector: 'cloukit-toggle',
  template: `
    <div
      (click)="toggleValue()"
      [ngStyle]="getStyle('wrapper').style"
    >
      <div
        [ngStyle]="getStyle('circle').style"
      ></div>
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
    </div>`,
  styles: [ ],
  providers: [ CLOUKIT_TOGGLE_VALUE_ACCESSOR ],
})
export class CloukitToggleComponent implements ControlValueAccessor, OnChanges {

  /**
   * Optional theme selector. Only use `theme` when you have registered a valid theme
   * via the `CloukitThemeService` from [`@cloukit/theme`]{@link https://cloukit.github.io/#/component/theme}.
   *
   * Example using the custom theme `toggle--fancy`:
   * ```html
   * <cloukit-toggle formControlName="foo" theme="toggle--fancy"></cloukit-toggle>
   * ```
   */
  @Input()
  public theme: string;

  private themeSelected: CloukitComponentTheme;
  private state = {
    internalValue: false,
    isDisabled: false,
    uiModifier: 'base',
    uiState: 'untoggled',
  };

  constructor(private themeService: CloukitThemeService) {
    this.themeSelected = this.themeService.getComponentTheme('toggle');
  }

  public getStyle(element: string): CloukitStatefulAndModifierAwareElementThemeStyleDefinition {
    if (this.themeSelected !== undefined && this.themeSelected !== null) {
      const style = this.themeSelected.getStyle(element, this.state.uiState, this.state.uiModifier);
      return this.themeService.prefixStyle(style);
    }
    return { style: {}, icon: {} } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition;
  }

  public updateUiModifierAndState() {
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

  public toggleValue() {
    if (!this.state.isDisabled) {
      this.setValue(!this.state.internalValue);
    }
  }

  // will be overridden on init
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  /**
   * @overrides OnChanges
   * @hidden
   */
  ngOnChanges() {
    if (this.theme !== undefined && this.theme !== null) {
      this.themeSelected = this.themeService.getComponentTheme(this.theme);
      if (this.themeSelected === null) {
        console.log(`WARN: requested theme ${this.theme} does not exist. Falling back to default theme for toggle.`);
        this.themeSelected = this.themeService.getComponentTheme('toggle');
      }
    }
  }

  /**
   * @overrides ControlValueAccessor
   * @hidden
   */
  writeValue(value: any): void {
    if (value !== this.state.internalValue) {
      this.state.internalValue = value;
      this.updateUiModifierAndState();
    }
  }

  /**
   * @overrides ControlValueAccessor
   * @hidden
   */
  setDisabledState(isDisabled: boolean): void {
    this.state.isDisabled = isDisabled;
    this.updateUiModifierAndState();
  }

  /**
   * @overrides ControlValueAccessor
   * @hidden
   */  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
    this.updateUiModifierAndState();
  }

  /**
   * @overrides ControlValueAccessor
   * @hidden
   */
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
    this.updateUiModifierAndState();
  }

  /**
   * @overrides ControlValueAccessor
   * @hidden
   */
  setValue(value: boolean) {
    if (value !== this.state.internalValue) {
      this.state.internalValue = value;
      this.onChangeCallback(value);
      this.updateUiModifierAndState();
    }
  }

  /**
   * @overrides ControlValueAccessor
   * @hidden
   */
  getValue(): boolean {
    return this.state.internalValue;
  }

}
