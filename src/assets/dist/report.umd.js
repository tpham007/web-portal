(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('report', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.report = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ReportService = /** @class */ (function () {
        function ReportService() {
        }
        ReportService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ReportService.ctorParameters = function () { return []; };
        /** @nocollapse */ ReportService.ngInjectableDef = i0.defineInjectable({ factory: function ReportService_Factory() { return new ReportService(); }, token: ReportService, providedIn: "root" });
        return ReportService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ReportComponent = /** @class */ (function () {
        function ReportComponent() {
        }
        /**
         * @return {?}
         */
        ReportComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ReportComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-report',
                        template: "\n    <p>\n      report works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ReportComponent.ctorParameters = function () { return []; };
        return ReportComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ReportModule = /** @class */ (function () {
        function ReportModule() {
        }
        ReportModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ReportComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ReportComponent
                                }
                            ])
                        ],
                        exports: [ReportComponent]
                    },] }
        ];
        return ReportModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.ReportService = ReportService;
    exports.ReportComponent = ReportComponent;
    exports.ReportModule = ReportModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vcmVwb3J0L2xpYi9yZXBvcnQuc2VydmljZS50cyIsIm5nOi8vcmVwb3J0L2xpYi9yZXBvcnQuY29tcG9uZW50LnRzIiwibmc6Ly9yZXBvcnQvbGliL3JlcG9ydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLXJlcG9ydCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICByZXBvcnQgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuaW1wb3J0IHsgQ3VzdG9taXplTW9kdWxlICB9IGZyb20gJ2N1c3RvbWl6ZSc7XG5pbXBvcnQgeyBSZXBvcnRDb21wb25lbnQgfSBmcm9tICcuL3JlcG9ydC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtSZXBvcnRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEN1c3RvbWl6ZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1JlcG9ydENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkN1c3RvbWl6ZU1vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NEJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQixrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhDQUlUO3FCQUVGOzs7O1FBUUQsc0JBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBTUE7U0FhNkI7O29CQWI1QkMsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDL0IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWU7aUNBQ3hEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUMzQjs7UUFDMkIsbUJBQUM7S0FiN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==