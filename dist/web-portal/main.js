(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "@import url(\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\");\n.parent { \n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex;\n    flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCIvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIik7XG4ucGFyZW50IHsgXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header [shareCollection]=\"shareCollection\"></app-header>\n\n<div class=\"parent\" [style.max-height.px]=\"height\">\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\" style=\"text-align:center;max-height:inherit;\" [ngStyle]=\"{'width':shareCollection.showApp==true?'12%':'0%'}\">\n    <app-left-panel [shareCollection]=\"shareCollection\"></app-left-panel>\n  </div>\n  <div style=\"max-height:inherit;margin-left:0.5%;margin-right:0.5%;\" [ngStyle]=\"{'width':shareCollection.showApp==true?'75%':'100%'}\">\n    <app-workspace></app-workspace>\n  </div>\n  <div class=\"d-none d-md-block d-lg-block d-xl-block\" style=\"text-align:center;max-height:inherit;\" [ngStyle]=\"{'width':shareCollection.showApp==true?'12%':'0%'}\">\n    <app-right-panel [shareCollection]=\"shareCollection\"></app-right-panel>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: ShareCollection, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareCollection", function() { return ShareCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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

var ShareCollection = /** @class */ (function () {
    function ShareCollection() {
    }
    return ShareCollection;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Harmonic Portal';
        this.height = window.innerHeight - 180;
        this.shareCollection = new ShareCollection();
        this.shareCollection.showApp = true;
    }
    AppComponent.prototype.onResize = function (event) {
        this.height = event.target.innerHeight - 180;
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
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-panel/left-panel.component */ "./src/app/left-panel/left-panel.component.ts");
/* harmony import */ var _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./right-panel/right-panel.component */ "./src/app/right-panel/right-panel.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/workspace/workspace.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _left_panel_left_panel_component__WEBPACK_IMPORTED_MODULE_6__["LeftPanelComponent"],
                _right_panel_right_panel_component__WEBPACK_IMPORTED_MODULE_7__["RightPanelComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_10__["WorkspaceComponent"],
                _application_application_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
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

module.exports = ".card:hover {\n    border-color: black;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/application/application.component.html":
/*!********************************************************!*\
  !*** ./src/app/application/application.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"margin:10px;\">\n  <div class=\"card-header\">{{app.name}}</div>\n  <div class=\"card-body\">\n    <img src=\"{{app.icon}}\" style=\"height:24px;width:auto;\">\n  </div>\n</div>"

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
    function ApplicationComponent() {
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
        __metadata("design:paramtypes", [])
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

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">File 360 Info</span>\n  </div>\n</footer>"

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
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = ".square-top {\n    position: absolute;\n    top: 50px;\n    width: 48px;\n    height: 22px;\n    z-index: 999;\n    left: 48.1%;\n    border-radius: 5px;\n    opacity: .5;\n    border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3F1YXJlLXRvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGxlZnQ6IDQ4LjElO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n\n  <!-- logo -->\n  <a class=\"navbar-brand\">\n      <img [src]=\"imgSrc\"\n      (mouseover)=\"imgSrc = '../../assets/img/logoB.png'\"\n      (mouseout)=\"imgSrc = '../../assets/img/logoA.png'\" style=\"width: 120px; height: auto;\">\n  </a>\n  <button class=\"square-top\" (click)=\"toggleApp()\" title=\"Hide/Show applications\">\n      <span *ngIf=\"shareCollection.showApp==false\" class=\"glyphicon glyphicon-resize-small\"></span>\n      <span *ngIf=\"shareCollection.showApp==true\" class=\"glyphicon glyphicon-resize-full\"></span>\n  </button>\n  \n</nav>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
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
    function HeaderComponent() {
        this.title = "Harmonic Portal";
        this.imgSrc = "../../assets/img/logoA.png";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleApp = function () {
        this.shareCollection.showApp = !(this.shareCollection.showApp);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_1__["ShareCollection"])
    ], HeaderComponent.prototype, "shareCollection", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/left-panel/left-panel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/left-panel/left-panel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-panel {\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n    box-sizing: content-box; /* So the width will be 100% + 17px */\n    text-align: center;\n}\ni {\n    border: solid black;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 4px;\n}\n.circle-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 16px;\n    width: 32px;\n    height: 32px;\n    z-index: 999;\n    border-radius: 16px;\n    padding-top: 5px;\n    background-color: lightgray;\n    border-color: transparent;\n    opacity: .7;\n}\n.circle-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 16px;\n    width: 32px;\n    height: 32px;\n    z-index: 999;\n    border-radius: 16px;\n    background-color: lightgray;\n    border-color: transparent;\n    opacity: .7;\n}\n.up {\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n}\n.down {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1wYW5lbC9sZWZ0LXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0IsQ0FBQyxzQ0FBc0M7SUFDL0QsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSx5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSx5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLDJCQUEyQjtJQUMzQixtQ0FBbUM7Q0FDdEM7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7Q0FDcEMiLCJmaWxlIjoic3JjL2FwcC9sZWZ0LXBhbmVsL2xlZnQtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIFNvIHRoZSB3aWR0aCB3aWxsIGJlIDEwMCUgKyAxN3B4ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaSB7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA0cHg7XG59XG4uY2lyY2xlLXRvcCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDE2cHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3BhY2l0eTogLjc7XG59XG4uY2lyY2xlLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG9wYWNpdHk6IC43O1xufVxuLnVwIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xufVxuLmRvd24ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/left-panel/left-panel.component.html":
/*!******************************************************!*\
  !*** ./src/app/left-panel/left-panel.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #leftAppPanel class=\"app-panel animated\" \n  (mouseover)=\"roll=true\" (mouseout)=\"roll=false\"\n  [ngClass]=\"{'bounceInLeft':shareCollection.showApp,'bounceOutLeft':!shareCollection.showApp}\">\n  <button class=\"circle-top\" [ngStyle]=\"{'display':(roll==true&&!isTop())?'':'none'}\">\n    <i class=\"up\"></i>\n  </button>\n  <app-application *ngFor=\"let app of applications\"\n    [attr.id]=\"app.id\"\n    [app]=\"app\"></app-application>\n  <button class=\"circle-bottom\" [ngStyle]=\"{'display':(roll==true&&!isBottom())==true?'':'none'}\">\n    <i class=\"down\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/left-panel/left-panel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/left-panel/left-panel.component.ts ***!
  \****************************************************/
/*! exports provided: LeftPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPanelComponent", function() { return LeftPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftPanelComponent = /** @class */ (function () {
    function LeftPanelComponent(repo) {
        this.repo = repo;
        this.roll = false;
    }
    LeftPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repo.getLeftApplications().subscribe(function (data) {
            _this.applications = data;
        }, // Bind to view
        function (// Bind to view
        err) {
            // Log errors if any
            console.log('error: ', err);
        });
    };
    LeftPanelComponent.prototype.isTop = function () {
        if (this.topAppElm == null) {
            var topAppId = this.applications[0].id;
            this.topAppElm = document.getElementById(topAppId);
        }
        return (this.topAppElm.offsetTop - this.topAppElm.parentElement.scrollTop) >= 0;
    };
    LeftPanelComponent.prototype.isBottom = function () {
        if (this.bottomAppElm == null) {
            var bottomAppId = this.applications[this.applications.length - 1].id;
            this.bottomAppElm = document.getElementById(bottomAppId);
        }
        return (this.bottomAppElm.offsetTop - this.bottomAppElm.parentElement.scrollTop - this.bottomAppElm.parentElement.offsetHeight + this.bottomAppElm.parentElement.offsetTop) <= 2;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_2__["ShareCollection"])
    ], LeftPanelComponent.prototype, "shareCollection", void 0);
    LeftPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-panel',
            template: __webpack_require__(/*! ./left-panel.component.html */ "./src/app/left-panel/left-panel.component.html"),
            styles: [__webpack_require__(/*! ./left-panel.component.css */ "./src/app/left-panel/left-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], LeftPanelComponent);
    return LeftPanelComponent;
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

/***/ "./src/app/repository.service.ts":
/*!***************************************!*\
  !*** ./src/app/repository.service.ts ***!
  \***************************************/
/*! exports provided: RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


var RepositoryService = /** @class */ (function () {
    function RepositoryService(http) {
        this.http = http;
    }
    RepositoryService.prototype.getLeftApplications = function () {
        return this.http.get('../assets/left-applications.json');
    };
    RepositoryService.prototype.getRightApplications = function () {
        return this.http.get('../assets/right-applications.json');
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

/***/ "./src/app/right-panel/right-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/right-panel/right-panel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-panel {\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n    box-sizing: content-box; /* So the width will be 100% + 17px */\n    text-align: center;\n}\ni {\n    border: solid black;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 4px;\n}\n.circle-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 16px;\n    width: 32px;\n    height: 32px;\n    z-index: 999;\n    border-radius: 16px;\n    padding-top: 5px;\n    background-color: lightgray;\n    border-color: transparent;\n    opacity: .7;\n}\n.circle-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 16px;\n    width: 32px;\n    height: 32px;\n    z-index: 999;\n    border-radius: 16px;\n    background-color: lightgray;\n    border-color: transparent;\n    opacity: .7;\n}\n.up {\n    transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n}\n.down {\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtcGFuZWwvcmlnaHQtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdCQUF3QixDQUFDLHNDQUFzQztJQUMvRCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMkJBQTJCO0lBQzNCLG1DQUFtQztDQUN0QztBQUNEO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztDQUNwQyIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LXBhbmVsL3JpZ2h0LXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXBhbmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiBTbyB0aGUgd2lkdGggd2lsbCBiZSAxMDAlICsgMTdweCAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmkge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNHB4O1xufVxuLmNpcmNsZS10b3Age1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxNnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG9wYWNpdHk6IC43O1xufVxuLmNpcmNsZS1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAuNztcbn1cbi51cCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbn1cbi5kb3duIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/right-panel/right-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/right-panel/right-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #rightAppPanel class=\"app-panel animated bounceInRight\" \n  (mouseover)=\"roll=true\" (mouseout)=\"roll=false\"\n  [ngClass]=\"{'bounceInRight':shareCollection.showApp,'bounceOutRight':!shareCollection.showApp}\">\n  <button class=\"circle-top\" [ngStyle]=\"{'display':(roll==true&&!isTop())?'':'none'}\">\n    <i class=\"up\"></i>\n  </button>\n  <app-application *ngFor=\"let app of applications\"\n    [attr.id]=\"app.id\"\n    [app]=\"app\"></app-application>\n  <button class=\"circle-bottom\" [ngStyle]=\"{'display':(roll==true&&!isBottom())?'':'none'}\">\n    <i class=\"down\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/right-panel/right-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/right-panel/right-panel.component.ts ***!
  \******************************************************/
/*! exports provided: RightPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPanelComponent", function() { return RightPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository.service */ "./src/app/repository.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightPanelComponent = /** @class */ (function () {
    function RightPanelComponent(repo) {
        this.repo = repo;
        this.roll = false;
    }
    RightPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repo.getRightApplications().subscribe(function (data) {
            _this.applications = data;
        }, // Bind to view
        function (// Bind to view
        err) {
            // Log errors if any
            console.log('error: ', err);
        });
    };
    RightPanelComponent.prototype.isTop = function () {
        if (this.topAppElm == null) {
            var topAppId = this.applications[0].id;
            this.topAppElm = document.getElementById(topAppId);
        }
        return (this.topAppElm.offsetTop - this.topAppElm.parentElement.scrollTop) >= 0;
    };
    RightPanelComponent.prototype.isBottom = function () {
        if (this.bottomAppElm == null) {
            var bottomAppId = this.applications[this.applications.length - 1].id;
            this.bottomAppElm = document.getElementById(bottomAppId);
        }
        return (this.bottomAppElm.offsetTop - this.bottomAppElm.parentElement.scrollTop - this.bottomAppElm.parentElement.offsetHeight + this.bottomAppElm.parentElement.offsetTop) <= 2;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_2__["ShareCollection"])
    ], RightPanelComponent.prototype, "shareCollection", void 0);
    RightPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-panel',
            template: __webpack_require__(/*! ./right-panel.component.html */ "./src/app/right-panel/right-panel.component.html"),
            styles: [__webpack_require__(/*! ./right-panel.component.css */ "./src/app/right-panel/right-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_repository_service__WEBPACK_IMPORTED_MODULE_1__["RepositoryService"]])
    ], RightPanelComponent);
    return RightPanelComponent;
}());



/***/ }),

/***/ "./src/app/workspace/workspace.component.css":
/*!***************************************************!*\
  !*** ./src/app/workspace/workspace.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-workspace {\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n    padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */\n    box-sizing: content-box; /* So the width will be 100% + 17px */\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3NwYWNlL3dvcmtzcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CLENBQUMsa0VBQWtFO0lBQ3ZGLHdCQUF3QixDQUFDLHNDQUFzQztJQUMvRCxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC93b3Jrc3BhY2Uvd29ya3NwYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdvcmtzcGFjZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4OyAvKiBJbmNyZWFzZS9kZWNyZWFzZSB0aGlzIHZhbHVlIGZvciBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkgKi9cbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogU28gdGhlIHdpZHRoIHdpbGwgYmUgMTAwJSArIDE3cHggKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/workspace/workspace.component.html":
/*!****************************************************!*\
  !*** ./src/app/workspace/workspace.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-workspace\" >\n  OOO\n  <router-outlet></router-outlet>\n</div>\n\n"

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
    function WorkspaceComponent() {
        this.show = false;
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
    };
    WorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.css */ "./src/app/workspace/workspace.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = __webpack_require__(/*! c:\vos\web-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map