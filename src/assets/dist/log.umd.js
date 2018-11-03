(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('log', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.log = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LogService = /** @class */ (function () {
        function LogService() {
        }
        LogService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LogService.ctorParameters = function () { return []; };
        /** @nocollapse */ LogService.ngInjectableDef = i0.defineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });
        return LogService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LogComponent = /** @class */ (function () {
        function LogComponent() {
        }
        /**
         * @return {?}
         */
        LogComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LogComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-log',
                        template: "\n    <p>\n      log works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        LogComponent.ctorParameters = function () { return []; };
        return LogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LogModule = /** @class */ (function () {
        function LogModule() {
        }
        LogModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LogComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: LogComponent
                                }
                            ])
                        ],
                        exports: [LogComponent]
                    },] }
        ];
        return LogModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LogService = LogService;
    exports.LogComponent = LogComponent;
    exports.LogModule = LogModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nL2xpYi9sb2cuc2VydmljZS50cyIsIm5nOi8vbG9nL2xpYi9sb2cuY29tcG9uZW50LnRzIiwibmc6Ly9sb2cvbGliL2xvZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBsb2cgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuaW1wb3J0IHsgQ3VzdG9taXplTW9kdWxlICB9IGZyb20gJ2N1c3RvbWl6ZSc7XG5pbXBvcnQgeyBMb2dDb21wb25lbnQgfSBmcm9tICcuL2xvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb2dDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEN1c3RvbWl6ZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogTG9nQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW0xvZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTG9nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkN1c3RvbWl6ZU1vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7eUJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQiwrQkFBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDJDQUlUO3FCQUVGOzs7O1FBUUQsbUJBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBTUE7U0FhMEI7O29CQWJ6QkMsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDNUIsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVk7aUNBQ3JEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO3FCQUN4Qjs7UUFDd0IsZ0JBQUM7S0FiMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==