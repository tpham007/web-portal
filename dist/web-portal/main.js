(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/customize/fesm5/customize.js":
/*!*******************************************!*\
  !*** ./dist/customize/fesm5/customize.js ***!
  \*******************************************/
/*! exports provided: CustomizeService, TabComponent, TabsetComponent, CustomizeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeService", function() { return CustomizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeModule", function() { return CustomizeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CustomizeService = /** @class */ (function () {
    function CustomizeService() {
    }
    CustomizeService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CustomizeService.ctorParameters = function () { return []; };
    /** @nocollapse */ CustomizeService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function CustomizeService_Factory() { return new CustomizeService(); }, token: CustomizeService, providedIn: "root" });
    return CustomizeService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.title = '';
        this.active = false;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TabComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'cos-tab',
                    template: "<ng-content *ngIf=\"active\"></ng-content>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return []; };
    TabComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return TabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tabs = this.tabs.toArray();
        /** @type {?} */
        var actives = this.tabs.filter(function (t) { return t.active; });
        if (actives.length > 1) {
            console.error("Multiple active tabs set 'active'");
        }
        else if (!actives.length && tabs.length) {
            tabs[0].active = true;
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.tabClicked = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        /** @type {?} */
        var tabs = this.tabs.toArray();
        tabs.forEach(function (tab) { return tab.active = false; });
        tab.active = true;
        this.onSelect.emit(tab);
    };
    TabsetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'cos-tabset',
                    template: "<section class=\"tab-set\">\n  <ul\n    class=\"nav\"\n    [class.nav-pills]=\"vertical\"\n    [class.nav-tabs]=\"!vertical\">\n    <li\n      *ngFor=\"let tab of tabs\"\n      [class.active]=\"tab.active\">\n      <a\n        (click)=\"tabClicked(tab)\"\n        class=\"btn\"\n        [class.disabled]=\"tab.disabled\">\n        <span>{{tab.title}}</span>\n      </a>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <ng-content></ng-content>\n  </div>\n</section>",
                    styles: ["a{text-decoration:none}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav-tabs>li{float:left;position:relative;display:block}.nav-tabs>li>a{position:relative;display:block;padding:10px 15px;border:none;color:#000;background:0 0;font-weight:600;opacity:.5;outline:0;box-shadow:none;cursor:pointer}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before,group:after{display:table;content:\" \"}.tab-set{background:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.12),0 1px 2px 0 rgba(0,0,0,.24)}.tab-content{padding:15px 15px 25px;text-align:center}.nav-tabs{border-bottom:2px solid #eee;margin-bottom:10px}.nav-tabs>li.disabled:hover{background:0 0}.nav-tabs>li.disabled:hover>a{margin-top:1px}.nav-tabs>li>a:hover{border:none;color:#fc5d44;background:0 0;opacity:1}.nav-tabs>li>a::after{content:\"\";height:2px;position:absolute;width:100%;left:0;bottom:-1px;transition:250ms;-webkit-transform:scale(0);transform:scale(0);background:#fc5d44;color:#fff}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{border-width:0;opacity:1}.nav-tabs>li.active>a::after,.nav-tabs>li:hover>a::after{-webkit-transform:scale(1);transform:scale(1)}"]
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return []; };
    TabsetComponent.propDecorators = {
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [TabComponent,] }]
    };
    return TabsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CustomizeModule = /** @class */ (function () {
    function CustomizeModule() {
    }
    CustomizeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    declarations: [TabComponent, TabsetComponent],
                    exports: [TabComponent, TabsetComponent]
                },] }
    ];
    return CustomizeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jdXN0b21pemUvbGliL2N1c3RvbWl6ZS5zZXJ2aWNlLnRzIiwibmc6Ly9jdXN0b21pemUvbGliL3RhYi90YWIuY29tcG9uZW50LnRzIiwibmc6Ly9jdXN0b21pemUvbGliL3RhYnNldC90YWJzZXQuY29tcG9uZW50LnRzIiwibmc6Ly9jdXN0b21pemUvbGliL2N1c3RvbWl6ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21pemVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nvcy10YWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFiLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZSA9ICcnO1xuICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyQ29udGVudEluaXQgLCBJbnB1dCwgT3V0cHV0LCBDb250ZW50Q2hpbGRyZW4sIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi90YWIvdGFiLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nvcy10YWJzZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFic2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFic2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0ICB7XG4gIEBJbnB1dCgpIHZlcnRpY2FsO1xuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSB0YWJzO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcbiAgICBjb25zdCBhY3RpdmVzID0gdGhpcy50YWJzLmZpbHRlcih0ID0+IHsgcmV0dXJuIHQuYWN0aXZlIH0pO1xuXG4gICAgaWYoYWN0aXZlcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBNdWx0aXBsZSBhY3RpdmUgdGFicyBzZXQgJ2FjdGl2ZSdgKTtcbiAgICB9IGVsc2UgaWYoIWFjdGl2ZXMubGVuZ3RoICYmIHRhYnMubGVuZ3RoKSB7XG4gICAgICB0YWJzWzBdLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdGFiQ2xpY2tlZCh0YWIpIHtcbiAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzLnRvQXJyYXkoKTtcblxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0YWIuYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMub25TZWxlY3QuZW1pdCh0YWIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuLy9pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0L3RhYnNldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1RhYkNvbXBvbmVudCwgVGFic2V0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RhYkNvbXBvbmVudCwgVGFic2V0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21pemVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzsyQkFKRDtDQUVBOzs7Ozs7QUNGQTtJQVdFO1FBSFMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ1Q7Ozs7SUFFakIsK0JBQVE7OztJQUFSO0tBQ0M7O2dCQVpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsc0RBQW1DOztpQkFFcEM7Ozs7O3dCQUVFLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQU1SLG1CQUFDO0NBZEQ7Ozs7OztBQ0ZBO0lBWUU7UUFGVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUV2Qjs7OztJQUVqQiw0Q0FBa0I7OztJQUFsQjs7WUFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBTSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUEsRUFBRSxDQUFDO1FBRTFELElBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU0sSUFBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN2QjtLQUNGOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxHQUFHOztZQUNOLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUEsQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixxZUFBc0M7O2lCQUV2Qzs7Ozs7MkJBRUUsS0FBSzsyQkFDTCxNQUFNO3VCQUNOLGVBQWUsU0FBQyxZQUFZOztJQXNCL0Isc0JBQUM7Q0E5QkQ7Ozs7OztBQ0hBO0lBTUE7S0FPZ0M7O2dCQVAvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDN0MsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztpQkFDekM7O0lBQzhCLHNCQUFDO0NBUGhDOzs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: configServiceFactory, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configServiceFactory", function() { return configServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/blank/blank.component.ts");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module.service */ "./src/app/module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"]
    }
];
function configServiceFactory(injector) {
    return function () {
        console.log('Load dependencies');
        var moduleService = injector.get(_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]);
        return moduleService.initApps();
    };
}
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: configServiceFactory, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]], multi: true }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n\n<app-body></app-body>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository.service */ "./src/app/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(repo) {
        this.repo = repo;
        this.title = 'Harmonic Portal';
        this.shareCollection = this.repo.shareCollection;
        this.shareCollection.appEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AppComponent.prototype.onResize = function (event) {
        this.shareCollection.bodyHeight = event.target.innerHeight - 60;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createCompiler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _module_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module.service */ "./src/app/module.service.ts");
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router.service */ "./src/app/router.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/workspace/workspace.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _pipe_application_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipe/application.filter */ "./src/app/pipe/application.filter.ts");
/* harmony import */ var _pipe_application_order__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipe/application.order */ "./src/app/pipe/application.order.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blank_blank_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blank/blank.component */ "./src/app/blank/blank.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_13__["WorkspaceComponent"],
                _application_application_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_15__["BodyComponent"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_16__["PanelComponent"],
                _pipe_application_filter__WEBPACK_IMPORTED_MODULE_17__["ApplicationFilter"],
                _pipe_application_order__WEBPACK_IMPORTED_MODULE_18__["ApplicationOrder"],
                _blank_blank_component__WEBPACK_IMPORTED_MODULE_20__["BlankComponent"]
            ],
            imports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [
                _router_service__WEBPACK_IMPORTED_MODULE_8__["RouterService"], _module_service__WEBPACK_IMPORTED_MODULE_7__["ModuleService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_19__["APP_BASE_HREF"], useValue: '/' },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["COMPILER_OPTIONS"], useValue: {}, multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["COMPILER_OPTIONS"]] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CompilerFactory"]] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/application/application.component.css":
/*!*******************************************************!*\
  !*** ./src/app/application/application.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover {\n    border-color: black;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    text-decoration: none;\n}\n.card.active {\n    border: 2px solid black;\n}\n.card-header {\n    color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2FyZC5hY3RpdmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/application/application.component.html":
/*!********************************************************!*\
  !*** ./src/app/application/application.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"card\" style=\"margin:10px;\"\n[routerLink]=\"app.path\"\n  [ngClass]=\"{'active':shareCollection.selectedApp==app}\">\n  <div class=\"card-header\">{{app.name}}</div>\n  <div class=\"card-body\">\n    <img src=\"{{app.icon}}\" style=\"width:48px;height:auto;\">\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application */ "./src/app/application/application.ts");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(repo) {
        this.repo = repo;
        this.shareCollection = this.repo.shareCollection;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _application__WEBPACK_IMPORTED_MODULE_1__["Application"])
    ], ApplicationComponent.prototype, "app", void 0);
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/application/application.ts":
/*!********************************************!*\
  !*** ./src/app/application/application.ts ***!
  \********************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
var Application = /** @class */ (function () {
    function Application() {
    }
    return Application;
}());



/***/ }),

/***/ "./src/app/blank/blank.component.css":
/*!*******************************************!*\
  !*** ./src/app/blank/blank.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/blank/blank.component.html":
/*!********************************************!*\
  !*** ./src/app/blank/blank.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  placehoder for app\n</p>\n"

/***/ }),

/***/ "./src/app/blank/blank.component.ts":
/*!******************************************!*\
  !*** ./src/app/blank/blank.component.ts ***!
  \******************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.css */ "./src/app/blank/blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body { \n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex;\n    flex-wrap: wrap;\n}\n.workspace-only >>>  app-workspace {\n    width: 99%!important;\n}\n.workspace-app >>> app-workspace {\n    width: 85%!important;\n}\n@media screen and (max-width:  768px) {\n    .workspace-app >>> app-workspace {\n        width: 99%!important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0k7UUFDSSxxQkFBcUI7S0FDeEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkgeyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi53b3Jrc3BhY2Utb25seSA+Pj4gIGFwcC13b3Jrc3BhY2Uge1xuICAgIHdpZHRoOiA5OSUhaW1wb3J0YW50O1xufVxuLndvcmtzcGFjZS1hcHAgPj4+IGFwcC13b3Jrc3BhY2Uge1xuICAgIHdpZHRoOiA4NSUhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogIDc2OHB4KSB7XG4gICAgLndvcmtzcGFjZS1hcHAgPj4+IGFwcC13b3Jrc3BhY2Uge1xuICAgICAgICB3aWR0aDogOTklIWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\" \n  [style.max-height.px]=\"shareCollection.bodyHeight\"\n  [style.min-height.px]=\"shareCollection.bodyHeight\"\n  [class.workspace-only]=\"!shareCollection.showApp\"\n  [class.workspace-app]=\"shareCollection.showApp\">\n  \n  <app-workspace #appWorkspace\n    (mouseover)=\"mouseOver($event)\"\n    (mouseenter)=\"hideApp()\"\n    [ngClass]=\"{'workspace-only':!shareCollection.showApp,'workspace-app':shareCollection.showApp}\">\n  </app-workspace>\n\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\"\n    style=\"text-align:center;max-height:inherit;transition: width 0.5s;\"\n    [ngStyle]=\"{'width':shareCollection.showApp==true?'14%':'0%'}\">\n    <app-panel></app-panel>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyComponent = /** @class */ (function () {
    function BodyComponent(repo) {
        this.repo = repo;
        this.shareCollection = this.repo.shareCollection;
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent.prototype.mouseOver = function (event) {
        this.currentX = event.clientX;
    };
    BodyComponent.prototype.hideApp = function () {
        var _this = this;
        if (this.shareCollection.pinApp == false) {
            var timer_1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(300).subscribe(function () {
                if (_this.currentX < _this.appWorkspace.nativeElement.clientWidth) {
                    _this.shareCollection.showApp = false;
                }
                timer_1.unsubscribe();
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appWorkspace', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BodyComponent.prototype, "appWorkspace", void 0);
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: absolute;\n    bottom: -3px;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n}\na , u { \n    font-size: 12px;\n    color: gray;\n    text-decoration: none;\n}\na:hover {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbn1cbmEgLCB1IHsgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer navbar navbar-expand-sm bg-dark navbar-dark\">\n  <a style=\"position:absolute;right:10px;font-size:12px;\"\n    href>CableOS Information</a>\n  <div *ngIf=\"shareCollection.selectedApp!=null\" \n    style=\"font-size:12px;\">\n    <span style=\"color:gray\">Current app</span>\n    <span style=\"margin-left:5px;font-weight:bold;color:white;\">{{shareCollection.selectedApp.name}}</span>\n</div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(repo) {
        this.repo = repo;
        this.shareCollection = this.repo.shareCollection;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    border-radius: 0px!important;\n    background-color:#840b2a;\n    background: \n    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.15) 30%, rgba(255,255,255,.3) 32%, rgba(255,255,255,0) 33%) 0 0,\n    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.3) 13%, rgba(255,255,255,0) 14%) 0 0,\n    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 17%, rgba(255,255,255,.43) 19%, rgba(255,255,255,0) 20%) 0 110px,\n    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) -130px -170px,\n    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.2) 11%, rgba(255,255,255,.4) 13%, rgba(255,255,255,0) 14%) 130px 370px,\n    radial-gradient(rgba(255,255,255,0) 0, rgba(255,255,255,.1) 11%, rgba(255,255,255,.2) 13%, rgba(255,255,255,0) 14%) 0 0,\n    linear-gradient(45deg, #343702 0%, #184500 20%, #187546 30%, #006782 40%, #0b1284 50%, #760ea1 60%, #83096e 70%, #840b2a 80%, #b13e12 90%, #e27412 100%);\n    background-size: 270px 270px, 970px 970px, 410px 410px, 610px 610px, 530px 530px, 730px 730px, 100% 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qjs7Ozs7Ozs2SkFPeUo7SUFDekoseUdBQXlHO0NBQzVHIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4NDBiMmE7XG4gICAgYmFja2dyb3VuZDogXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMCkgMCwgcmdiYSgyNTUsMjU1LDI1NSwuMTUpIDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwuMykgMzIlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDMzJSkgMCAwLFxuICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDApIDAsIHJnYmEoMjU1LDI1NSwyNTUsLjEpIDExJSwgcmdiYSgyNTUsMjU1LDI1NSwuMykgMTMlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDE0JSkgMCAwLFxuICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDApIDAsIHJnYmEoMjU1LDI1NSwyNTUsLjIpIDE3JSwgcmdiYSgyNTUsMjU1LDI1NSwuNDMpIDE5JSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAyMCUpIDAgMTEwcHgsXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMCkgMCwgcmdiYSgyNTUsMjU1LDI1NSwuMikgMTElLCByZ2JhKDI1NSwyNTUsMjU1LC40KSAxMyUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTQlKSAtMTMwcHggLTE3MHB4LFxuICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDApIDAsIHJnYmEoMjU1LDI1NSwyNTUsLjIpIDExJSwgcmdiYSgyNTUsMjU1LDI1NSwuNCkgMTMlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDE0JSkgMTMwcHggMzcwcHgsXG4gICAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMCkgMCwgcmdiYSgyNTUsMjU1LDI1NSwuMSkgMTElLCByZ2JhKDI1NSwyNTUsMjU1LC4yKSAxMyUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTQlKSAwIDAsXG4gICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMzQzNzAyIDAlLCAjMTg0NTAwIDIwJSwgIzE4NzU0NiAzMCUsICMwMDY3ODIgNDAlLCAjMGIxMjg0IDUwJSwgIzc2MGVhMSA2MCUsICM4MzA5NmUgNzAlLCAjODQwYjJhIDgwJSwgI2IxM2UxMiA5MCUsICNlMjc0MTIgMTAwJSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNzBweCAyNzBweCwgOTcwcHggOTcwcHgsIDQxMHB4IDQxMHB4LCA2MTBweCA2MTBweCwgNTMwcHggNTMwcHgsIDczMHB4IDczMHB4LCAxMDAlIDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\" style=\"text-align: center;\">\n\n  <!-- logo -->\n  <a class=\"navbar-brand\">\n      <img id=\"appLogo\" [src]=\"imgSrc\"\n      (mouseover)=\"imgSrc = '../../assets/img/logo2.png'\"\n      (mouseout)=\"imgSrc = '../../assets/img/logo1.png'\" style=\"width: 96px; height: auto;\">\n  </a>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(repo) {
        this.repo = repo;
        this.title = "Harmonic Portal";
        this.imgSrc = "../../assets/img/logo1.png";
        this.shareCollection = this.repo.shareCollection;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/module.service.ts":
/*!***********************************!*\
  !*** ./src/app/module.service.ts ***!
  \***********************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repository.service */ "./src/app/repository.service.ts");
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router.service */ "./src/app/router.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/esm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var customize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! customize */ "./dist/customize/fesm5/customize.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Needed for the new modules






var ModuleService = /** @class */ (function () {
    function ModuleService(injector, compiler, http, repo, routerService) {
        this.injector = injector;
        this.compiler = compiler;
        this.http = http;
        this.repo = repo;
        this.routerService = routerService;
        this.source = "http://" + window.location.host + "/";
        console.log(compiler);
    }
    ModuleService.prototype.initApps = function () {
        var THIS = this;
        var promise = new Promise(function (resolve, reject) {
            THIS.repo.getApplications().then(function (applications) {
                var allp = [];
                applications.forEach(function (app) {
                    if (app.registered) {
                        var p = new Promise(function (resolve, reject) {
                            THIS.loadModuleSystemJS(app).then(function (exports) {
                                THIS.routerService.createAndRegisterRoute(app, exports);
                                resolve();
                            }, function (err) {
                                console.log(app.moduleName + " could not be found, did you copy the umd file to " + app.location + "?");
                                console.log('error=' + err);
                            });
                        });
                        allp.push(p);
                    }
                });
                Promise.all(allp).then(function (rs) { return resolve(); });
            });
        });
        return promise;
    };
    ModuleService.prototype.loadModuleSystemJS = function (moduleInfo) {
        var _this = this;
        var url = this.source + moduleInfo.location;
        SystemJS.set('@angular/core', SystemJS.newModule(_angular_core__WEBPACK_IMPORTED_MODULE_1__));
        SystemJS.set('@angular/common', SystemJS.newModule(_angular_common__WEBPACK_IMPORTED_MODULE_5__));
        SystemJS.set('@angular/router', SystemJS.newModule(_angular_router__WEBPACK_IMPORTED_MODULE_6__));
        SystemJS.set('@angular/platform-browser', SystemJS.newModule(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__));
        SystemJS.set('@clr/angular', SystemJS.newModule(_clr_angular__WEBPACK_IMPORTED_MODULE_7__));
        SystemJS.set('customize', SystemJS.newModule(customize__WEBPACK_IMPORTED_MODULE_9__));
        // now, import the new module
        return SystemJS.import("" + url).then(function (module) {
            console.log(module);
            return _this.compiler.compileModuleAndAllComponentsAsync(module["" + moduleInfo.moduleName]).then(function (compiled) {
                console.log(compiled);
                return module;
            });
        });
    };
    ModuleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"],
            _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"],
            _repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"],
            _router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]])
    ], ModuleService);
    return ModuleService;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-panel {\n    width: 100%;\n    height:  calc(100% - 140px);\n    overflow-y: scroll;\n    box-sizing: content-box; /* So the width will be 100% + 17px */\n    text-align: center;\n    margin-top: 10px;\n    padding-bottom: 100px;\n}\n.app-anchor {\n    position: relative;\n    width: 32px;\n    height: 32px;\n    border-radius: 5px;\n    opacity: 1;\n    border-color: transparent;\n    cursor: pointer;\n    margin-left: 5px!important;\n    margin-right: 5px!important;\n}\n.app-anchor.anchor-close {\n    margin-left: -45px!important;\n    top: -71px;\n}\n.app-anchor.anchor-open  {\n    margin-left: 0px;\n}\n.anchor-open #showApp {\n    display: none;\n}\n.anchor-close #hideApp {\n    display: none;\n}\ni {\n    border: solid black;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 4px;\n}\n.circle-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 32px;\n    width: 32px;\n    height: 32px;\n    z-index: 999;\n    border-radius: 16px;\n    padding-bottom: 4px;\n    background-color: lightgray;\n    border-color: transparent;\n    opacity: .7;\n}\n.circle-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 128px;\n    width: 32px;\n    height: 32px;\n    z-index: 999;\n    border-radius: 16px;\n    padding-top: 4px;\n    background-color: lightgray;\n    border-color: transparent;\n    opacity: .7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLHdCQUF3QixDQUFDLHNDQUFzQztJQUMvRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtDQUN6QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjtBQUNEO0lBQ0kseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNEO0lBQ0kseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6ICBjYWxjKDEwMCUgLSAxNDBweCk7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiBTbyB0aGUgd2lkdGggd2lsbCBiZSAxMDAlICsgMTdweCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5hcHAtYW5jaG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHghaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogNXB4IWltcG9ydGFudDtcbn1cbi5hcHAtYW5jaG9yLmFuY2hvci1jbG9zZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC00NXB4IWltcG9ydGFudDtcbiAgICB0b3A6IC03MXB4O1xufVxuLmFwcC1hbmNob3IuYW5jaG9yLW9wZW4gIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmFuY2hvci1vcGVuICNzaG93QXBwIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmFuY2hvci1jbG9zZSAjaGlkZUFwcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbmkge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNHB4O1xufVxuLmNpcmNsZS10b3Age1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG9wYWNpdHk6IC43O1xufVxuLmNpcmNsZS1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAxMjhweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAuNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span #appGroup class=\"animated\"\n  [ngClass]=\"{'bounceIn':shareCollection.showApp,'bounceOut':!shareCollection.showApp}\"\n  style=\"animation-delay: .5s;\">\n  <span class=\"btn btn-sm\" style=\"margin:5px;\" \n    (click)=\"changeAppType('Operation')\"\n    [ngClass]=\"{'btn-success':shareCollection.shownAppType=='Operation','btn-secondary':shareCollection.shownAppType!='Operation'}\"\n    [ngStyle]=\"{'box-shadow':shareCollection.shownAppType=='Operation'?'1px 1px 1px 1px grey':''}\">Operations</span>\n  <span class=\"btn btn-sm\" style=\"margin:5px;\"\n    (click)=\"changeAppType('Tool')\"\n    [ngClass]=\"{'btn-info':shareCollection.shownAppType=='Tool','btn-secondary':shareCollection.shownAppType!='Tool'}\"\n    [ngStyle]=\"{'box-shadow':shareCollection.shownAppType=='Tool'?'1px 1px 1px 1px grey':''}\">Tools</span>\n</span>\n<span #appAnchor class=\"app-anchor animated\" \n  style=\"animation-delay: .3s;\"\n  [ngClass]=\"{'anchor-open fadeInLeft':shareCollection.showApp,'anchor-close fadeInRight':!shareCollection.showApp}\">\n  <span title=\"Show Apps\" (mouseenter)=\"toggleApp()\">\n    <img id=\"showApp\" src=\"assets/img/app-list.png\" width=\"32\" height=\"32\">\n  </span>\n  <span *ngIf=\"shareCollection.pinApp==false\" title=\"Pin Apps\" (click)=\"shareCollection.pinApp=true\">\n    <img id=\"hideApp\" src=\"assets/img/pin.png\" width=\"16\" height=\"16\">\n  </span>\n  <span *ngIf=\"shareCollection.pinApp==true\" title=\"Hide Apps\" (click)=\"shareCollection.pinApp=false\">\n    <img id=\"hideApp\" src=\"assets/img/unpin.png\" width=\"16\" height=\"16\">\n  </span>\n</span>\n<div #appPanel class=\"app-panel animated\" \n  style=\"animation-delay: .5s;\"\n  (mouseover)=\"roll=true\" (mouseout)=\"roll=false\"\n  [ngStyle]=\"{'display':(!shareCollection.showApp||shareCollection.shownAppType==null)?'none':'block'}\"\n  [ngClass]=\"{'fadeIn':shareCollection.showApp&&shareCollection.shownAppType!=null}\">\n  <button class=\"circle-top oi oi-caret-top\" [ngStyle]=\"{'display':(roll==true&&!isTop())?'inline':'none'}\"></button>\n  <app-application *ngFor=\"let app of mApplications[shareCollection.shownAppType]\"\n    [attr.id]=\"app.id\"\n    [app]=\"app\"></app-application>\n  <button class=\"circle-bottom oi oi-caret-bottom\" [ngStyle]=\"{'display':(roll==true&&!isBottom())?'inline':'none'}\"></button>\n</div>"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PanelComponent = /** @class */ (function () {
    function PanelComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.roll = false;
        this.shareCollection = this.repo.shareCollection;
        this.mApplications = {};
    }
    PanelComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var applications, _i, applications_1, app, tApplications, THIS;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repo.getApplications()];
                    case 1:
                        applications = _a.sent();
                        for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                            app = applications_1[_i];
                            tApplications = this.mApplications[app.type];
                            if (tApplications == null) {
                                tApplications = [];
                                tApplications.push(app);
                                this.mApplications[app.type] = tApplications;
                            }
                            else {
                                this.mApplications[app.type].push(app);
                            }
                        }
                        THIS = this;
                        this.router.events.subscribe(function (routerEvent) { return __awaiter(_this, void 0, void 0, function () {
                            var params;
                            return __generator(this, function (_a) {
                                if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                                    params = routerEvent.url.split('/');
                                    if (params.length > 1 && params[1] !== '') {
                                        THIS.repo.getApplication(params[1]).then(function (app) {
                                            if (app != null) {
                                                THIS.repo.shareCollection.selectedApp = app;
                                                THIS.repo.shareCollection.shownAppType = THIS.repo.shareCollection.selectedApp.type;
                                                var idx = THIS.mApplications[app.type].indexOf(app);
                                                THIS.mApplications[app.type].splice(idx, 1);
                                                THIS.mApplications[app.type].unshift(app);
                                                THIS.panel.nativeElement.scrollTop = 0;
                                                THIS.topAppElm = null;
                                                THIS.bottomAppElm = null;
                                            }
                                        });
                                    }
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    PanelComponent.prototype.toggleApp = function () {
        this.shareCollection.showApp = !this.shareCollection.showApp;
    };
    PanelComponent.prototype.isTop = function () {
        if (this.topAppElm == null) {
            var topAppId = this.mApplications[this.shareCollection.shownAppType][0].id;
            this.topAppElm = document.getElementById(topAppId);
        }
        var pos = (this.topAppElm.offsetTop - this.topAppElm.parentElement.scrollTop);
        //console.log('top:' + pos);
        return pos >= 110;
    };
    PanelComponent.prototype.isBottom = function () {
        if (this.bottomAppElm == null) {
            var tApplcations = this.mApplications[this.shareCollection.shownAppType];
            var bottomAppId = tApplcations[tApplcations.length - 1].id;
            this.bottomAppElm = document.getElementById(bottomAppId);
        }
        var pos = (this.bottomAppElm.offsetTop - this.bottomAppElm.parentElement.scrollTop - this.bottomAppElm.parentElement.offsetHeight + this.bottomAppElm.parentElement.offsetTop);
        //console.log('bottom:' + pos);
        return pos <= 120;
    };
    PanelComponent.prototype.changeAppType = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.shareCollection.shownAppType != type) {
                    this.shareCollection.shownAppType = null;
                    this.topAppElm = null;
                    this.bottomAppElm = null;
                    window.setTimeout(function (shareCollection, type) {
                        shareCollection.shownAppType = type;
                    }, 50, this.shareCollection, type);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appPanel'),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "panel", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/pipe/application.filter.ts":
/*!********************************************!*\
  !*** ./src/app/pipe/application.filter.ts ***!
  \********************************************/
/*! exports provided: ApplicationFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationFilter", function() { return ApplicationFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationFilter = /** @class */ (function () {
    function ApplicationFilter() {
    }
    ApplicationFilter.prototype.transform = function (applications, args) {
        if (args && Array.isArray(applications)) {
            // copy all objects of original array into new array of objects
            var rApplcations = applications;
            // args are the compare oprators provided in the *ngFor directive
            args.forEach(function (filterParam) {
                var filterkey = Object.keys(filterParam)[0];
                var filtervalue = filterParam[filterkey];
                applications.forEach(function (appToFilter) {
                    if (appToFilter[filterkey] != filtervalue && filtervalue != "") {
                        // object didn't match a filter value so remove it from array via filter
                        rApplcations = rApplcations.filter(function (obj) { return obj !== appToFilter; });
                    }
                });
            });
            // return new array of objects to *ngFor directive
            return rApplcations;
        }
    };
    ApplicationFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'applicationFilter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ApplicationFilter);
    return ApplicationFilter;
}());



/***/ }),

/***/ "./src/app/pipe/application.order.ts":
/*!*******************************************!*\
  !*** ./src/app/pipe/application.order.ts ***!
  \*******************************************/
/*! exports provided: ApplicationOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationOrder", function() { return ApplicationOrder; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationOrder = /** @class */ (function () {
    function ApplicationOrder(repo) {
        this.repo = repo;
    }
    ApplicationOrder.prototype.transform = function (applications, args) {
        var _this = this;
        if (Array.isArray(applications)) {
            applications.sort(function (a, b) { return (a.name > b.name || (_this.repo.shareCollection.selectedApp != null && b.name == _this.repo.shareCollection.selectedApp.name)) ? 1 : ((b.name > a.name) ? -1 : 0); });
        }
        return applications;
    };
    ApplicationOrder = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'applicationOrder'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], ApplicationOrder);
    return ApplicationOrder;
}());



/***/ }),

/***/ "./src/app/repository.service.ts":
/*!***************************************!*\
  !*** ./src/app/repository.service.ts ***!
  \***************************************/
/*! exports provided: ShareCollection, RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCollection", function() { return ShareCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShareCollection = /** @class */ (function () {
    function ShareCollection() {
    }
    return ShareCollection;
}());

var RepositoryService = /** @class */ (function () {
    function RepositoryService(http) {
        this.http = http;
        this.shareCollection = new ShareCollection();
        this.shareCollection.pinApp = false;
        this.shareCollection.showApp = false;
        this.shareCollection.bodyHeight = window.innerHeight - 60;
        this.shareCollection.shownAppType = 'Operation';
        this.shareCollection.applications = this.getApplications();
    }
    RepositoryService.prototype.getApplications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dataUrl, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(this.shareCollection.applications == null)) return [3 /*break*/, 2];
                        dataUrl = '../assets/applications.json';
                        return [4 /*yield*/, this.http.get(dataUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        this.shareCollection.applications = response;
                        this.shareCollection.applications.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.shareCollection.applications];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RepositoryService.prototype.getApplication = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var applications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApplications()];
                    case 1:
                        applications = _a.sent();
                        return [2 /*return*/, applications.filter(function (app) { return app.path === path; })[0]];
                }
            });
        });
    };
    RepositoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RepositoryService);
    return RepositoryService;
}());



/***/ }),

/***/ "./src/app/router.service.ts":
/*!***********************************!*\
  !*** ./src/app/router.service.ts ***!
  \***********************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RouterService = /** @class */ (function () {
    function RouterService(router, compiler, http) {
        this.router = router;
        this.compiler = compiler;
        this.http = http;
        this.existingRoutes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.routes);
    }
    Object.defineProperty(RouterService.prototype, "routes", {
        get: function () {
            var routesToReturn = this.router.config;
            return routesToReturn.filter(function (x) { return x.path !== ""; });
        },
        enumerable: true,
        configurable: true
    });
    RouterService.prototype.createAndRegisterRoute = function (moduleToRegister, exports) {
        var route = {
            path: moduleToRegister.path,
            loadChildren: function () { return exports["" + moduleToRegister.moduleName]; }
        };
        this.registerRoute(route);
    };
    RouterService.prototype.routeIsRegistered = function (path) {
        return this.router.config.filter(function (r) { return r.path === path; }).length > 0;
    };
    RouterService.prototype.registerRoute = function (route) {
        if (this.routeIsRegistered(route.path))
            return;
        this.router.config.push(route);
        this.updateRouteConfig(this.router.config);
    };
    RouterService.prototype.unRegisterRoute = function (path) {
        console.log("Unregister", path);
        this.updateRouteConfig(this.router.config.filter(function (route) { return route.path !== path; }));
    };
    RouterService.prototype.getCurrentRoutedApp = function () {
        return this.router.url;
    };
    RouterService.prototype.updateRouteConfig = function (config) {
        this.router.resetConfig(config);
        this.existingRoutes.next(this.routes);
    };
    RouterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "./src/app/workspace/workspace.component.css":
/*!***************************************************!*\
  !*** ./src/app/workspace/workspace.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    height: inherit;\n    width: inherit;\n    overflow-y: scroll;\n    box-sizing: content-box; /* So the width will be 100% + 17px */\n    text-align: center;\n    max-height: inherit;\n    min-height: inherit;\n    margin-top: 10px;\n    margin-left: 0.5%;\n    margin-right: 0.5%;\n    transition: width 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3NwYWNlL3dvcmtzcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsd0JBQXdCLENBQUMsc0NBQXNDO0lBQy9ELG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzcGFjZS93b3Jrc3BhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiBTbyB0aGUgd2lkdGggd2lsbCBiZSAxMDAlICsgMTdweCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNSU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/workspace/workspace.component.html":
/*!****************************************************!*\
  !*** ./src/app/workspace/workspace.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/workspace/workspace.component.ts":
/*!**************************************************!*\
  !*** ./src/app/workspace/workspace.component.ts ***!
  \**************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(repo) {
        this.repo = repo;
        this.shareCollection = this.repo.shareCollection;
    }
    WorkspaceComponent.prototype.ngOnInit = function () { };
    WorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.css */ "./src/app/workspace/workspace.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Documents/angular/web-portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map