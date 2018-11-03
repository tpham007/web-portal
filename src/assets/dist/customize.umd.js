(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('customize', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.customize = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var CustomizeService = /** @class */ (function () {
        function CustomizeService() {
        }
        CustomizeService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CustomizeService.ctorParameters = function () { return []; };
        /** @nocollapse */ CustomizeService.ngInjectableDef = i0.defineInjectable({ factory: function CustomizeService_Factory() { return new CustomizeService(); }, token: CustomizeService, providedIn: "root" });
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
            { type: i0.Component, args: [{
                        selector: 'cos-tab',
                        template: "<ng-content *ngIf=\"active\"></ng-content>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TabComponent.ctorParameters = function () { return []; };
        TabComponent.propDecorators = {
            title: [{ type: i0.Input }],
            active: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return TabComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TabsetComponent = /** @class */ (function () {
        function TabsetComponent() {
            this.onSelect = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'cos-tabset',
                        template: "<section class=\"tab-set\">\n  <ul\n    class=\"nav\"\n    [class.nav-pills]=\"vertical\"\n    [class.nav-tabs]=\"!vertical\">\n    <li\n      *ngFor=\"let tab of tabs\"\n      [class.active]=\"tab.active\">\n      <a\n        (click)=\"tabClicked(tab)\"\n        class=\"btn\"\n        [class.disabled]=\"tab.disabled\">\n        <span>{{tab.title}}</span>\n      </a>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <ng-content></ng-content>\n  </div>\n</section>",
                        styles: ["a{text-decoration:none}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav-tabs>li{float:left;position:relative;display:block}.nav-tabs>li>a{position:relative;display:block;padding:10px 15px;border:none;color:#000;background:0 0;font-weight:600;opacity:.5;outline:0;box-shadow:none;cursor:pointer}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before,group:after{display:table;content:\" \"}.tab-set{background:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.12),0 1px 2px 0 rgba(0,0,0,.24)}.tab-content{padding:15px 15px 25px;text-align:center}.nav-tabs{border-bottom:2px solid #eee;margin-bottom:10px}.nav-tabs>li.disabled:hover{background:0 0}.nav-tabs>li.disabled:hover>a{margin-top:1px}.nav-tabs>li>a:hover{border:none;color:#fc5d44;background:0 0;opacity:1}.nav-tabs>li>a::after{content:\"\";height:2px;position:absolute;width:100%;left:0;bottom:-1px;transition:250ms;-webkit-transform:scale(0);transform:scale(0);background:#fc5d44;color:#fff}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{border-width:0;opacity:1}.nav-tabs>li.active>a::after,.nav-tabs>li:hover>a::after{-webkit-transform:scale(1);transform:scale(1)}"]
                    }] }
        ];
        /** @nocollapse */
        TabsetComponent.ctorParameters = function () { return []; };
        TabsetComponent.propDecorators = {
            vertical: [{ type: i0.Input }],
            onSelect: [{ type: i0.Output }],
            tabs: [{ type: i0.ContentChildren, args: [TabComponent,] }]
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.CustomizeService = CustomizeService;
    exports.TabComponent = TabComponent;
    exports.TabsetComponent = TabsetComponent;
    exports.CustomizeModule = CustomizeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9taXplLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY3VzdG9taXplL2xpYi9jdXN0b21pemUuc2VydmljZS50cyIsIm5nOi8vY3VzdG9taXplL2xpYi90YWIvdGFiLmNvbXBvbmVudC50cyIsIm5nOi8vY3VzdG9taXplL2xpYi90YWJzZXQvdGFic2V0LmNvbXBvbmVudC50cyIsIm5nOi8vY3VzdG9taXplL2xpYi9jdXN0b21pemUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9taXplU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3MtdGFiJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0ICwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFiL3RhYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3MtdGFic2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYnNldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCAge1xuICBASW5wdXQoKSB2ZXJ0aWNhbDtcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgdGFicztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG4gICAgY29uc3QgYWN0aXZlcyA9IHRoaXMudGFicy5maWx0ZXIodCA9PiB7IHJldHVybiB0LmFjdGl2ZSB9KTtcblxuICAgIGlmKGFjdGl2ZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc29sZS5lcnJvcihgTXVsdGlwbGUgYWN0aXZlIHRhYnMgc2V0ICdhY3RpdmUnYCk7XG4gICAgfSBlbHNlIGlmKCFhY3RpdmVzLmxlbmd0aCAmJiB0YWJzLmxlbmd0aCkge1xuICAgICAgdGFic1swXS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRhYkNsaWNrZWQodGFiKSB7XG4gICAgY29uc3QgdGFicyA9IHRoaXMudGFicy50b0FycmF5KCk7XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHRhYi5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGFiLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQodGFiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcbi8vaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIvdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC90YWJzZXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtUYWJDb21wb25lbnQsIFRhYnNldENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUYWJDb21wb25lbnQsIFRhYnNldENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9taXplTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJJbnB1dCIsIkV2ZW50RW1pdHRlciIsIk91dHB1dCIsIkNvbnRlbnRDaGlsZHJlbiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsrQkFKRDtLQUVBOzs7Ozs7QUNGQTtRQVdFO1lBSFMsVUFBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLFdBQU0sR0FBRyxLQUFLLENBQUM7WUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ1Q7Ozs7UUFFakIsK0JBQVE7OztZQUFSO2FBQ0M7O29CQVpGQyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLHNEQUFtQzs7cUJBRXBDOzs7Ozs0QkFFRUMsUUFBSzs2QkFDTEEsUUFBSzsrQkFDTEEsUUFBSzs7UUFNUixtQkFBQztLQWREOzs7Ozs7QUNGQTtRQVlFO1lBRlUsYUFBUSxHQUFHLElBQUlDLGVBQVksRUFBRSxDQUFDO1NBRXZCOzs7O1FBRWpCLDRDQUFrQjs7O1lBQWxCOztvQkFDUSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O29CQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQU0sT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFBLEVBQUUsQ0FBQztnQkFFMUQsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO2lCQUNwRDtxQkFBTSxJQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztpQkFDdkI7YUFDRjs7Ozs7UUFFRCxvQ0FBVTs7OztZQUFWLFVBQVcsR0FBRzs7b0JBQ04sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUVoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUEsQ0FBQyxDQUFDO2dCQUN4QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekI7O29CQTdCRkYsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixxZUFBc0M7O3FCQUV2Qzs7Ozs7K0JBRUVDLFFBQUs7K0JBQ0xFLFNBQU07MkJBQ05DLGtCQUFlLFNBQUMsWUFBWTs7UUFzQi9CLHNCQUFDO0tBOUJEOzs7Ozs7QUNIQTtRQU1BO1NBT2dDOztvQkFQL0JDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZO3lCQUNiO3dCQUNELFlBQVksRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7d0JBQzdDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7cUJBQ3pDOztRQUM4QixzQkFBQztLQVBoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==