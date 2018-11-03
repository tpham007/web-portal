(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('user', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.user = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var UserService = /** @class */ (function () {
        function UserService() {
        }
        UserService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () { return []; };
        /** @nocollapse */ UserService.ngInjectableDef = i0.defineInjectable({ factory: function UserService_Factory() { return new UserService(); }, token: UserService, providedIn: "root" });
        return UserService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var UserComponent = /** @class */ (function () {
        function UserComponent() {
        }
        /**
         * @return {?}
         */
        UserComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        UserComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-user',
                        template: "<cos-tabset>\n    <cos-tab title=\"Account\">\n        Account information\n    </cos-tab>\n    <cos-tab title=\"Harmonic ID\">\n        Peers\n    </cos-tab>\n</cos-tabset>"
                    }] }
        ];
        /** @nocollapse */
        UserComponent.ctorParameters = function () { return []; };
        return UserComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var UserModule = /** @class */ (function () {
        function UserModule() {
        }
        UserModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: UserComponent
                                }
                            ])
                        ],
                        declarations: [UserComponent],
                        exports: [UserComponent]
                    },] }
        ];
        return UserModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.UserService = UserService;
    exports.UserComponent = UserComponent;
    exports.UserModule = UserModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3VzZXIvbGliL3VzZXIuc2VydmljZS50cyIsIm5nOi8vdXNlci9saWIvdXNlci5jb21wb25lbnQudHMiLCJuZzovL3VzZXIvbGliL3VzZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3MtdXNlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi91c2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuaW1wb3J0IHsgVXNlckNvbXBvbmVudCB9IGZyb20gJy4vdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9taXplTW9kdWxlICB9IGZyb20gJ2N1c3RvbWl6ZSc7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEN1c3RvbWl6ZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogVXNlckNvbXBvbmVudFxuICAgICAgfVxuICAgIF0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1VzZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVXNlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVXNlck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJDdXN0b21pemVNb2R1bGUiLCJSb3V0ZXJNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzBCQUpEO0tBRUE7Ozs7OztBQ0ZBO1FBU0U7U0FFQzs7OztRQUVELGdDQUFROzs7WUFBUjthQUVDOztvQkFiRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQix5TEFBb0M7cUJBRXJDOzs7O1FBV0Qsb0JBQUM7S0FmRDs7Ozs7O0FDRkE7UUFLQTtTQWEyQjs7b0JBYjFCQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWE7aUNBQ3REOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQ3pCOztRQUN5QixpQkFBQztLQWIzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9