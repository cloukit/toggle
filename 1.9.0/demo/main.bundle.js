webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "<demo></demo>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
            providers: [],
            exports: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CLOUKIT_TOGGLE_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__ = __webpack_require__("./node_modules/rxjs/_esm5/util/noop.js");
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
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* forwardRef */])(function () { return CloukitToggleComponent; }),
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
var CloukitToggleComponent = /** @class */ (function () {
    function CloukitToggleComponent(themeService) {
        this.themeService = themeService;
        this.state = {
            mouseOver: false,
            internalValue: false,
            isDisabled: false,
            uiModifier: 'base',
            uiState: 'untoggled',
        };
        // will be overridden on init
        this.onTouchedCallback = __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__["a" /* noop */];
        this.onChangeCallback = __WEBPACK_IMPORTED_MODULE_3_rxjs_util_noop__["a" /* noop */];
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
            // Only set hover if not disabled!
            // Disabled wins over hover as modifier!
            if (this.state.mouseOver) {
                this.state.uiModifier = 'hover';
            }
            else {
                this.state.uiModifier = 'base';
            }
        }
        if (this.state.internalValue) {
            this.state.uiState = 'toggled';
        }
        else {
            this.state.uiState = 'untoggled';
        }
    };
    CloukitToggleComponent.prototype.handleMouseEnter = function () {
        this.state.mouseOver = true;
        this.updateUiModifierAndState();
    };
    CloukitToggleComponent.prototype.handleMouseLeave = function () {
        this.state.mouseOver = false;
        this.updateUiModifierAndState();
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], CloukitToggleComponent.prototype, "theme", void 0);
    CloukitToggleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cloukit-toggle',
            template: "\n    <div\n      (click)=\"toggleValue()\"\n      (mouseenter)=\"handleMouseEnter()\"\n      (mouseleave)=\"handleMouseLeave()\"\n      [ngStyle]=\"getStyle('wrapper').style\"\n    >\n      <div\n        [ngStyle]=\"getStyle('circle').style\"\n      ></div>\n      <svg\n        viewBox=\"0 0 512 512\"\n        [ngStyle]=\"getStyle('iconLeft').style\"\n      >\n        <path\n          [ngStyle]=\"getStyle('iconLeft').icon.svgStyle\"\n          [attr.d]=\"getStyle('iconLeft').icon.svgPathD\"\n        ></path>\n      </svg>\n      <svg\n        viewBox=\"0 0 512 512\"\n        [ngStyle]=\"getStyle('iconRight').style\"\n      >\n        <path\n          [ngStyle]=\"getStyle('iconRight').icon.svgStyle\"\n          [attr.d]=\"getStyle('iconRight').icon.svgPathD\"\n        ></path>\n      </svg>\n    </div>",
            styles: [],
            providers: [CLOUKIT_TOGGLE_VALUE_ACCESSOR],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cloukit_theme__["d" /* CloukitThemeService */]])
    ], CloukitToggleComponent);
    return CloukitToggleComponent;
}());



/***/ }),

/***/ "./src/components/toggle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitToggleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_component__ = __webpack_require__("./src/components/toggle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toggle_theme__ = __webpack_require__("./src/components/toggle.theme.ts");
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






var CloukitToggleModule = /** @class */ (function () {
    function CloukitToggleModule(themeService) {
        this.themeService = themeService;
        if (this.themeService.getComponentTheme('toggle') === null) {
            this.themeService.registerComponentTheme('toggle', new __WEBPACK_IMPORTED_MODULE_5__toggle_theme__["b" /* CloukitToggleComponentThemeDefault */]());
        }
        if (this.themeService.getComponentTheme('toggle--cornered') === null) {
            this.themeService.registerComponentTheme('toggle--cornered', new __WEBPACK_IMPORTED_MODULE_5__toggle_theme__["a" /* CloukitToggleComponentThemeCornered */]());
        }
    }
    CloukitToggleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__toggle_component__["a" /* CloukitToggleComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__toggle_component__["a" /* CloukitToggleComponent */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__cloukit_theme__["d" /* CloukitThemeService */]])
    ], CloukitToggleModule);
    return CloukitToggleModule;
}());



/***/ }),

/***/ "./src/components/toggle.theme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CloukitToggleComponentThemeDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitToggleComponentThemeCornered; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
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
var CloukitToggleComponentThemeDefault = /** @class */ (function (_super) {
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
        _this.createStyle('wrapper', 'untoggled', 'hover', _this.merge(_this.getStyle('wrapper', 'untoggled', 'base'), {
            style: {
                border: '1px solid #333',
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
        _this.createStyle('circle', 'untoggled', 'hover', _this.merge(_this.getStyle('circle', 'untoggled', 'base'), {
            style: {}
        }));
        _this.createStyle('iconLeft', 'untoggled', 'base', {
            style: {
                position: 'absolute',
                left: '2px',
                top: '1px',
                width: '20px',
                display: 'none',
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
        _this.createStyle('iconLeft', 'untoggled', 'hover', _this.merge(_this.getStyle('iconLeft', 'untoggled', 'base'), {
            style: {},
            icon: {}
        }));
        _this.createStyle('iconRight', 'untoggled', 'base', {
            style: {
                width: '20px',
                position: 'absolute',
                right: '2px',
                top: '1px',
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
        _this.createStyle('iconRight', 'untoggled', 'hover', _this.merge(_this.getStyle('iconRight', 'untoggled', 'base'), {
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
        _this.createStyle('wrapper', 'toggled', 'hover', _this.merge(_this.getStyle('wrapper', 'toggled', 'base'), {
            style: {
                border: '1px solid #333',
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
        _this.createStyle('circle', 'toggled', 'hover', _this.merge(_this.getStyle('circle', 'toggled', 'base'), {
            style: {}
        }));
        _this.createStyle('iconLeft', 'toggled', 'base', _this.merge(_this.getStyle('iconLeft', 'untoggled', 'base'), {
            style: {
                display: 'block',
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
        _this.createStyle('iconLeft', 'toggled', 'hover', _this.merge(_this.getStyle('iconLeft', 'toggled', 'base'), {
            style: {},
            icon: {}
        }));
        _this.createStyle('iconRight', 'toggled', 'base', _this.merge(_this.getStyle('iconRight', 'untoggled', 'base'), {
            style: {
                display: 'none',
            }
        }));
        _this.createStyle('iconRight', 'toggled', 'disabled', _this.merge(_this.getStyle('iconRight', 'toggled', 'base'), {
            style: {}
        }));
        _this.createStyle('iconRight', 'toggled', 'hover', _this.merge(_this.getStyle('iconRight', 'toggled', 'base'), {
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
var CloukitToggleComponentThemeCornered = /** @class */ (function (_super) {
    __extends(CloukitToggleComponentThemeCornered, _super);
    function CloukitToggleComponentThemeCornered() {
        var _this = _super.call(this) || this;
        //
        // UNTOGGLED
        //
        var wrapperUntoggledBase = _this.getElementTheme('wrapper', 'untoggled', 'base');
        wrapperUntoggledBase.styleDef.style.borderRadius = '1px';
        var wrapperUntoggledHover = _this.getElementTheme('wrapper', 'untoggled', 'hover');
        wrapperUntoggledHover.styleDef.style.borderRadius = '1px';
        var wrapperUntoggledDisabled = _this.getElementTheme('wrapper', 'untoggled', 'disabled');
        wrapperUntoggledDisabled.styleDef.style.borderRadius = '1px';
        var circleUntoggledBase = _this.getElementTheme('circle', 'untoggled', 'base');
        circleUntoggledBase.styleDef.style.borderRadius = '1px';
        var circleUntoggledDisabled = _this.getElementTheme('circle', 'untoggled', 'disabled');
        circleUntoggledDisabled.styleDef.style.borderRadius = '1px';
        var circleUntoggledHover = _this.getElementTheme('circle', 'untoggled', 'hover');
        circleUntoggledHover.styleDef.style.borderRadius = '1px';
        //
        // TOGGLED
        //
        var wrapperToggledBase = _this.getElementTheme('wrapper', 'toggled', 'base');
        wrapperToggledBase.styleDef.style.borderRadius = '1px';
        var wrapperToggledHover = _this.getElementTheme('wrapper', 'toggled', 'hover');
        wrapperToggledHover.styleDef.style.borderRadius = '1px';
        var wrapperToggledDisabled = _this.getElementTheme('wrapper', 'toggled', 'disabled');
        wrapperToggledDisabled.styleDef.style.borderRadius = '1px';
        var circleToggledBase = _this.getElementTheme('circle', 'toggled', 'base');
        circleToggledBase.styleDef.style.borderRadius = '1px';
        var circleToggledDisabled = _this.getElementTheme('circle', 'toggled', 'disabled');
        circleToggledDisabled.styleDef.style.borderRadius = '1px';
        var circleToggledHover = _this.getElementTheme('circle', 'toggled', 'hover');
        circleToggledHover.styleDef.style.borderRadius = '1px';
        return _this;
    }
    return CloukitToggleComponentThemeCornered;
}(CloukitToggleComponentThemeDefault));



/***/ }),

/***/ "./src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px;\">\n\n  <cloukit-story title=\"Basic Usage\" story=\"story-00-basic\">\n    <story-00-basic></story-00-basic>\n  </cloukit-story>\n\n  <br><br>\n\n  <cloukit-story title=\"Using Custom Theme\" story=\"story-01-themed\">\n    <story-01-themed></story-01-themed>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.sharedStyles = [
        '.row { display: flex; align-items:center; }',
        '.row span { margin-right:10px; }',
        '.row button { margin-left:50px; }',
        '.superButton, .superButtonSecondary { border:2px solid #710ECC; outline:0; background-color:#710ECC; color:#fff; border-radius:0px; padding:4px 8px 4px 8px; color:#fff; cursor:pointer; font-size:1rem; }',
        '.superButton:hover, .superButtonSecondary:hover { border:2px solid #710ECC; background-color:#fff; color:#710ECC;  }',
    ];
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'demo',
            template: __webpack_require__("./src/demo/demo.component.html"),
            styles: [],
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cloukit_story__ = __webpack_require__("./node_modules/@cloukit/story/story.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stories_story_00_basic__ = __webpack_require__("./src/demo/stories/story-00-basic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stories_story_01_themed__ = __webpack_require__("./src/demo/stories/story-01-themed.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DemoModule = /** @class */ (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // INITIALIZE STORY SOURCES
        //
        var baseUrl = document.getElementsByTagName('base')[0].href;
        var storySourceJsonUrl = baseUrl + "assets/demoStoriesSource.json"; // File is auto generated by build chain!
        this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__stories_story_00_basic__["a" /* Story00Component */],
                __WEBPACK_IMPORTED_MODULE_8__stories_story_01_themed__["a" /* Story01Component */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__demo_component__["a" /* DemoComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["c" /* CloukitThemeModule */],
                __WEBPACK_IMPORTED_MODULE_6__index__["b" /* CloukitToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__cloukit_story__["a" /* CloukitStoryModule */],
            ],
            providers: [],
            bootstrap: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__cloukit_story__["b" /* CloukitStoryService */]])
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/stories/story-00-basic.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\" [formGroup]=\"form\">\n\n  <div class=\"row\">\n    <span>Is Schrödingers cat dead?</span>\n\n    <cloukit-toggle\n      formControlName=\"isCatDead\"\n    ></cloukit-toggle>\n\n    <button\n      type=\"button\"\n      (click)=\"toggleFormDisabled()\"\n      class=\"superButton\"\n    >{{ isFormDisabled ? 'enable' : 'disable' }} form</button>\n  </div>\n\n\n  <br><br>\n\n  Reactive Form Result:\n  <pre *ngIf=\"form?.value\">{{form.value | json}}</pre>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-00-basic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Story00Component = /** @class */ (function () {
    function Story00Component() {
        this.isFormDisabled = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            isCatDead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](false)
        });
    }
    Story00Component.prototype.toggleFormDisabled = function () {
        if (this.isFormDisabled) {
            this.form.enable();
            this.isFormDisabled = false;
        }
        else {
            this.form.disable();
            this.isFormDisabled = true;
        }
    };
    Story00Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-00-basic',
            template: __webpack_require__("./src/demo/stories/story-00-basic.html"),
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */].sharedStyles),
        })
    ], Story00Component);
    return Story00Component;
}());



/***/ }),

/***/ "./src/demo/stories/story-01-themed.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"demo\" [formGroup]=\"form\">\n\n  <div class=\"row\">\n\n    <span>Theme: toggle--cornered</span>\n\n    <cloukit-toggle\n      formControlName=\"myBool\"\n      theme=\"toggle--cornered\"\n    ></cloukit-toggle>\n\n  </div>\n\n  <br><br>\n\n  <div class=\"row\">\n\n    <span>Theme: toggle--awesome</span>\n\n    <cloukit-toggle\n      formControlName=\"myBoolTwo\"\n      theme=\"toggle--awesome\"\n    ></cloukit-toggle>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/demo/stories/story-01-themed.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AwesomeToggleTheme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_component__ = __webpack_require__("./src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("./src/index.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AwesomeToggleTheme = /** @class */ (function (_super) {
    __extends(AwesomeToggleTheme, _super);
    function AwesomeToggleTheme() {
        var _this = _super.call(this) || this;
        var wrapperUntoggledBase = _this.getElementTheme('wrapper', 'toggled', 'base');
        wrapperUntoggledBase.styleDef.style.backgroundColor = 'blue';
        return _this;
    }
    return AwesomeToggleTheme;
}(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* CloukitToggleComponentThemeDefault */]));

var Story01Component = /** @class */ (function () {
    function Story01Component(cloukitThemeService) {
        this.cloukitThemeService = cloukitThemeService;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            myBool: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](false),
            myBoolTwo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](true),
        });
        this.cloukitThemeService.registerComponentTheme('toggle--awesome', new AwesomeToggleTheme());
    }
    Story01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story-01-themed',
            template: __webpack_require__("./src/demo/stories/story-01-themed.html"),
            styles: ['.row span { width:200px; }'].concat(__WEBPACK_IMPORTED_MODULE_2__demo_component__["a" /* DemoComponent */].sharedStyles),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cloukit_theme__["d" /* CloukitThemeService */]])
    ], Story01Component);
    return Story01Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_toggle_module__ = __webpack_require__("./src/components/toggle.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components_toggle_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_toggle_theme__ = __webpack_require__("./src/components/toggle.theme.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_toggle_theme__["b"]; });




/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map