webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "\n    <div class=\"demo\">\n      <demo></demo>\n    </div>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("../../../../../src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLOUKIT_TOGGLE_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__ = __webpack_require__("../../../../rxjs/util/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */




var CLOUKIT_TOGGLE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return CloukitToggleComponent; }),
    multi: true
};
/**
 * Toggle Component can be used inside a Reactive Form for a boolean.
 *
 * Just use this inside your templates:
 *
 * ```html
 * <cloukit-pagination
 *   [total]="totalPages"
 *   [current]="currentPage"
 *   (onPageSelect)="selectPage($event)"
 * ></cloukit-pagination>
 * ```
 */
var CloukitToggleComponent = (function () {
    function CloukitToggleComponent(themeService) {
        this.themeService = themeService;
        this.state = {
            internalValue: false,
            isDisabled: false,
            uiModifier: 'base',
            uiState: 'untoggled',
        };
        // will be overridden on init
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__["noop"];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__["noop"];
        this.themeSelected = this.themeService.getComponentTheme('toggle');
    }
    CloukitToggleComponent.prototype.getStyle = function (element) {
        if (this.themeSelected !== undefined && this.themeSelected !== null) {
            var style = this.themeSelected.getStyle(element, this.state.uiState, this.state.uiModifier);
            return this.themeService.prefixStyle(style);
        }
        return { style: {}, icon: {} };
    };
    CloukitToggleComponent.prototype.updateUiModifierAndState = function () {
        if (this.state.isDisabled) {
            this.state.uiModifier = 'disabled';
        }
        else {
            this.state.uiModifier = 'base';
        }
        if (this.state.internalValue) {
            this.state.uiState = 'toggled';
        }
        else {
            this.state.uiState = 'untoggled';
        }
    };
    CloukitToggleComponent.prototype.toggleValue = function () {
        if (!this.state.isDisabled) {
            this.setValue(!this.state.internalValue);
        }
    };
    /**
     * @overrides OnChanges
     * @hidden
     */
    CloukitToggleComponent.prototype.ngOnChanges = function () {
        if (this.theme !== undefined && this.theme !== null) {
            this.themeSelected = this.themeService.getComponentTheme(this.theme);
            if (this.themeSelected === null) {
                console.log("WARN: requested theme " + this.theme + " does not exist. Falling back to default theme for toggle.");
                this.themeSelected = this.themeService.getComponentTheme('toggle');
            }
        }
    };
    /**
     * @overrides ControlValueAccessor
     * @hidden
     */
    CloukitToggleComponent.prototype.writeValue = function (value) {
        if (value !== this.state.internalValue) {
            this.state.internalValue = value;
            this.updateUiModifierAndState();
        }
    };
    /**
     * @overrides ControlValueAccessor
     * @hidden
     */
    CloukitToggleComponent.prototype.setDisabledState = function (isDisabled) {
        this.state.isDisabled = isDisabled;
        this.updateUiModifierAndState();
    };
    /**
     * @overrides ControlValueAccessor
     * @hidden
     */ CloukitToggleComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
        this.updateUiModifierAndState();
    };
    /**
     * @overrides ControlValueAccessor
     * @hidden
     */
    CloukitToggleComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
        this.updateUiModifierAndState();
    };
    /**
     * @overrides ControlValueAccessor
     * @hidden
     */
    CloukitToggleComponent.prototype.setValue = function (value) {
        if (value !== this.state.internalValue) {
            this.state.internalValue = value;
            this.onChangeCallback(value);
            this.updateUiModifierAndState();
        }
    };
    /**
     * @overrides ControlValueAccessor
     * @hidden
     */
    CloukitToggleComponent.prototype.getValue = function () {
        return this.state.internalValue;
    };
    return CloukitToggleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitToggleComponent.prototype, "theme", void 0);
CloukitToggleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-toggle',
        template: "\n    <span \n      (click)=\"toggleValue()\"\n      [ngStyle]=\"getStyle('wrapper').style\"\n    >\n      <span\n        [ngStyle]=\"getStyle('circle').style\"\n      ></span>\n      <svg\n        viewBox=\"0 0 512 512\"\n        [ngStyle]=\"getStyle('iconLeft').style\"\n      >\n        <path\n          [ngStyle]=\"getStyle('iconLeft').icon.svgStyle\"\n          [attr.d]=\"getStyle('iconLeft').icon.svgPathD\"\n        ></path>\n      </svg>\n      <svg\n        viewBox=\"0 0 512 512\"\n        [ngStyle]=\"getStyle('iconRight').style\"\n      >\n        <path\n          [ngStyle]=\"getStyle('iconRight').icon.svgStyle\"\n          [attr.d]=\"getStyle('iconRight').icon.svgPathD\"\n        ></path>\n      </svg>\n    </span>",
        styles: [],
        providers: [CLOUKIT_TOGGLE_VALUE_ACCESSOR],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["d" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["d" /* CloukitThemeService */]) === "function" && _a || Object])
], CloukitToggleComponent);

var _a;
//# sourceMappingURL=toggle.component.js.map

/***/ }),

/***/ "../../../../../src/components/toggle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitToggleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_component__ = __webpack_require__("../../../../../src/components/toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toggle_theme__ = __webpack_require__("../../../../../src/components/toggle.theme.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitToggleModule = (function () {
    function CloukitToggleModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('toggle') === null) {
            this.themeService.registerComponentTheme('toggle', new __WEBPACK_IMPORTED_MODULE_5__toggle_theme__["b" /* CloukitToggleComponentThemeDefault */]());
        }
        if (this.themeService.getComponentTheme('toggle--cornered') === null) {
            this.themeService.registerComponentTheme('toggle--cornered', new __WEBPACK_IMPORTED_MODULE_5__toggle_theme__["a" /* CloukitToggleComponentThemeCornered */]());
        }
    }
    return CloukitToggleModule;
}());
CloukitToggleModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__toggle_component__["a" /* CloukitToggleComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__toggle_component__["a" /* CloukitToggleComponent */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__cloukit_theme__["d" /* CloukitThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cloukit_theme__["d" /* CloukitThemeService */]) === "function" && _a || Object])
], CloukitToggleModule);

var _a;
//# sourceMappingURL=toggle.module.js.map

/***/ }),

/***/ "../../../../../src/components/toggle.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CloukitToggleComponentThemeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitToggleComponentThemeCornered; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * The default theme with round edges. It is used as default.
 */
var CloukitToggleComponentThemeDefault = (function (_super) {
    __extends(CloukitToggleComponentThemeDefault, _super);
    function CloukitToggleComponentThemeDefault() {
        var _this = _super.call(this) || this;
        //
        // UNTOGGLED
        //
        _this.createStyle('wrapper', 'untoggled', 'base', {
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
        });
        _this.createStyle('wrapper', 'untoggled', 'disabled', _this.merge(_this.getStyle('wrapper', 'untoggled', 'base'), {
            style: {
                cursor: 'not-allowed',
            }
        }));
        _this.createStyle('circle', 'untoggled', 'base', {
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
        });
        _this.createStyle('circle', 'untoggled', 'disabled', _this.merge(_this.getStyle('circle', 'untoggled', 'base'), {
            style: {
                backgroundColor: '#a8a8a8',
            }
        }));
        _this.createStyle('iconLeft', 'untoggled', 'base', {
            style: {
                width: '20px',
                display: 'none',
                marginTop: '-1px',
            },
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__["b" /* CloukitIcons */].success,
                svgStyle: {
                    fill: '#fff',
                    transform: 'translate(3px, 2px)',
                    transition: 'fill 2s',
                }
            }
        });
        _this.createStyle('iconLeft', 'untoggled', 'disabled', _this.merge(_this.getStyle('iconLeft', 'untoggled', 'base'), {
            style: {},
            icon: {
                svgStyle: {
                    fill: '#a8a8a8',
                }
            }
        }));
        _this.createStyle('iconRight', 'untoggled', 'base', {
            style: {
                width: '20px',
                paddingLeft: '20px',
                marginTop: '-1px',
            },
            icon: {
                svgPathD: __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__["b" /* CloukitIcons */].failure,
                svgStyle: {
                    fill: '#fff',
                    transform: 'translate(3px, 2px)',
                    transition: 'fill 2s',
                }
            }
        });
        _this.createStyle('iconRight', 'untoggled', 'disabled', _this.merge(_this.getStyle('iconRight', 'untoggled', 'base'), {
            style: {}
        }));
        //
        // TOGGLED
        //
        _this.createStyle('wrapper', 'toggled', 'base', _this.merge(_this.getStyle('wrapper', 'untoggled', 'base'), {
            style: {
                backgroundColor: '#3FB13D',
            }
        }));
        _this.createStyle('wrapper', 'toggled', 'disabled', _this.merge(_this.getStyle('wrapper', 'toggled', 'base'), {
            style: {
                cursor: 'not-allowed',
                backgroundColor: '#206D1E',
            }
        }));
        _this.createStyle('circle', 'toggled', 'base', _this.merge(_this.getStyle('circle', 'untoggled', 'base'), {
            style: {
                left: '24px',
            }
        }));
        _this.createStyle('circle', 'toggled', 'disabled', _this.merge(_this.getStyle('circle', 'toggled', 'base'), {
            style: {
                backgroundColor: '#a8a8a8',
            }
        }));
        _this.createStyle('iconLeft', 'toggled', 'base', _this.merge(_this.getStyle('iconLeft', 'untoggled', 'base'), {
            style: {
                display: 'inline-block',
            }
        }));
        _this.createStyle('iconLeft', 'toggled', 'disabled', _this.merge(_this.getStyle('iconLeft', 'toggled', 'base'), {
            style: {},
            icon: {
                svgStyle: {
                    fill: '#a8a8a8',
                }
            }
        }));
        _this.createStyle('iconRight', 'toggled', 'base', _this.merge(_this.getStyle('iconRight', 'untoggled', 'base'), {
            style: {
                display: 'none',
            }
        }));
        _this.createStyle('iconRight', 'toggled', 'disabled', _this.merge(_this.getStyle('iconRight', 'toggled', 'base'), {
            style: {}
        }));
        return _this;
    }
    return CloukitToggleComponentThemeDefault;
}(__WEBPACK_IMPORTED_MODULE_0__cloukit_theme__["a" /* CloukitComponentTheme */]));

/**
 * The cornered theme with square edges. See the
 * [Themeing Guide]{@link https://cloukit.github.io/#/guide/themeing} on how to
 * use other themes like `cornered`.
 */
var CloukitToggleComponentThemeCornered = (function (_super) {
    __extends(CloukitToggleComponentThemeCornered, _super);
    function CloukitToggleComponentThemeCornered() {
        var _this = _super.call(this) || this;
        //
        // UNTOGGLED
        //
        var wrapperUntoggledBase = _this.getElementTheme('wrapper', 'untoggled', 'base');
        wrapperUntoggledBase.styleDef.style.borderRadius = '1px';
        var circleUntoggledBase = _this.getElementTheme('circle', 'untoggled', 'base');
        circleUntoggledBase.styleDef.style.borderRadius = '1px';
        var wrapperUntoggledDisabled = _this.getElementTheme('wrapper', 'untoggled', 'disabled');
        wrapperUntoggledDisabled.styleDef.style.borderRadius = '1px';
        var circleUntoggledDisabled = _this.getElementTheme('circle', 'untoggled', 'disabled');
        circleUntoggledDisabled.styleDef.style.borderRadius = '1px';
        //
        // TOGGLED
        //
        var wrapperToggledBase = _this.getElementTheme('wrapper', 'toggled', 'base');
        wrapperToggledBase.styleDef.style.borderRadius = '1px';
        var circleToggledBase = _this.getElementTheme('circle', 'toggled', 'base');
        circleToggledBase.styleDef.style.borderRadius = '1px';
        var wrapperToggledDisabled = _this.getElementTheme('wrapper', 'toggled', 'disabled');
        wrapperToggledDisabled.styleDef.style.borderRadius = '1px';
        var circleToggledDisabled = _this.getElementTheme('circle', 'toggled', 'disabled');
        circleToggledDisabled.styleDef.style.borderRadius = '1px';
        return _this;
    }
    return CloukitToggleComponentThemeCornered;
}(CloukitToggleComponentThemeDefault));

//# sourceMappingURL=toggle.theme.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"demo\"\n  [formGroup]=\"form\"\n>\n  <h3>Toggle</h3>\n  <table class=\"demotable\">\n    <tr>\n      <td>Is Schrödingers cat dead?</td>\n      <td>\n        <cloukit-toggle\n          formControlName=\"isCatDead\"\n        ></cloukit-toggle>\n      </td>\n    </tr>\n    <tr>\n      <td>Are you sure? (different theme)</td>\n      <td>\n        <cloukit-toggle\n          formControlName=\"areYouSure\"\n          theme=\"toggle--cornered\"\n        ></cloukit-toggle>\n      </td>\n    </tr>\n    <tr>\n      <td>Disabled states:</td>\n      <td>\n        <cloukit-toggle\n          formControlName=\"youCantTouchThisOff\"\n        ></cloukit-toggle>\n\n        <cloukit-toggle\n          formControlName=\"youCantTouchThisOn\"\n        ></cloukit-toggle>\n\n        <br><br>\n\n        <cloukit-toggle\n          formControlName=\"youCantTouchThisOffAlt\"\n          theme=\"toggle--cornered\"\n        ></cloukit-toggle>\n\n        <cloukit-toggle\n          formControlName=\"youCantTouchThisOnAlt\"\n          theme=\"toggle--cornered\"\n        ></cloukit-toggle>\n      </td>\n    </tr>\n  </table>\n\n  <hr><br>\n\n  Reactive Form Result:\n  <pre>{{getFormResult()}}</pre>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = (function () {
    function DemoComponent(fb) {
        this.styles = {};
        this.form = fb.group({
            isCatDead: false,
            areYouSure: true,
            youCantTouchThisOn: { value: true, disabled: true },
            youCantTouchThisOff: { value: false, disabled: true },
            youCantTouchThisOnAlt: { value: true, disabled: true },
            youCantTouchThisOffAlt: { value: false, disabled: true },
        });
    }
    DemoComponent.prototype.getFormResult = function () {
        return JSON.stringify(this.form.value, null, 2);
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo',
        template: __webpack_require__("../../../../../src/demo/demo.component.html"),
        styles: [
            '.demo { font-family: sans-serif; }',
            '.demotable td { vertical-align:top; padding:10px; }',
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], DemoComponent);

var _a;
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("../../../../@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__("../../../../../src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__demo_component__["a" /* DemoComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["c" /* CloukitThemeModule */], __WEBPACK_IMPORTED_MODULE_5__index__["a" /* CloukitToggleModule */]],
        providers: [],
        bootstrap: []
    })
], DemoModule);

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_toggle_module__ = __webpack_require__("../../../../../src/components/toggle.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_toggle_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_toggle_theme__ = __webpack_require__("../../../../../src/components/toggle.theme.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map