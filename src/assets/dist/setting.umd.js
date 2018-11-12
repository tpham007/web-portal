(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('setting', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.setting = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SettingService = /** @class */ (function () {
        function SettingService() {
        }
        SettingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SettingService.ctorParameters = function () { return []; };
        /** @nocollapse */ SettingService.ngInjectableDef = i0.defineInjectable({ factory: function SettingService_Factory() { return new SettingService(); }, token: SettingService, providedIn: "root" });
        return SettingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SettingComponent = /** @class */ (function () {
        function SettingComponent() {
        }
        /**
         * @return {?}
         */
        SettingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SettingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-setting',
                        template: "\n    <p>\n      setting works!\n    </p>\n  ",
                        styles: ['/setting.component.css']
                    }] }
        ];
        /** @nocollapse */
        SettingComponent.ctorParameters = function () { return []; };
        return SettingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SettingModule = /** @class */ (function () {
        function SettingModule() {
        }
        SettingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SettingComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: SettingComponent
                                }
                            ])
                        ],
                        exports: [SettingComponent]
                    },] }
        ];
        return SettingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.SettingService = SettingService;
    exports.SettingComponent = SettingComponent;
    exports.SettingModule = SettingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NldHRpbmcvbGliL3NldHRpbmcuc2VydmljZS50cyIsIm5nOi8vc2V0dGluZy9saWIvc2V0dGluZy5jb21wb25lbnQudHMiLCJuZzovL3NldHRpbmcvbGliL3NldHRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3Mtc2V0dGluZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzZXR0aW5nIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbJy9zZXR0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IFNldHRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2V0dGluZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3VzdG9taXplTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgY29tcG9uZW50OiBTZXR0aW5nQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1NldHRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ3VzdG9taXplTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsK0NBSVQ7aUNBQ1Esd0JBQXdCO3FCQUNsQzs7OztRQVFELHVCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQU1BO1NBYThCOztvQkFiN0JDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDaEMsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQjtpQ0FDekQ7NkJBQ0YsQ0FBQzt5QkFDSDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDNUI7O1FBQzRCLG9CQUFDO0tBYjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=