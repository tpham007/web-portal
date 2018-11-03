(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('lookup', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.lookup = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LookupService = /** @class */ (function () {
        function LookupService() {
        }
        LookupService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LookupService.ctorParameters = function () { return []; };
        /** @nocollapse */ LookupService.ngInjectableDef = i0.defineInjectable({ factory: function LookupService_Factory() { return new LookupService(); }, token: LookupService, providedIn: "root" });
        return LookupService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LookupComponent = /** @class */ (function () {
        function LookupComponent() {
        }
        /**
         * @return {?}
         */
        LookupComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        LookupComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-lookup',
                        template: "\n    <p>\n      lookup works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        LookupComponent.ctorParameters = function () { return []; };
        return LookupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var LookupModule = /** @class */ (function () {
        function LookupModule() {
        }
        LookupModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LookupComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: LookupComponent
                                }
                            ])
                        ],
                        exports: [LookupComponent]
                    },] }
        ];
        return LookupModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LookupService = LookupService;
    exports.LookupComponent = LookupComponent;
    exports.LookupModule = LookupModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9va3VwL2xpYi9sb29rdXAuc2VydmljZS50cyIsIm5nOi8vbG9va3VwL2xpYi9sb29rdXAuY29tcG9uZW50LnRzIiwibmc6Ly9sb29rdXAvbGliL2xvb2t1cC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb29rdXBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLWxvb2t1cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBsb29rdXAgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIExvb2t1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuaW1wb3J0IHsgQ3VzdG9taXplTW9kdWxlICB9IGZyb20gJ2N1c3RvbWl6ZSc7XG5pbXBvcnQgeyBMb29rdXBDb21wb25lbnQgfSBmcm9tICcuL2xvb2t1cC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb29rdXBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEN1c3RvbWl6ZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogTG9va3VwQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW0xvb2t1cENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTG9va3VwTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkN1c3RvbWl6ZU1vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NEJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQixrQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLDhDQUlUO3FCQUVGOzs7O1FBUUQsc0JBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBTUE7U0FhNkI7O29CQWI1QkMsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDL0IsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWU7aUNBQ3hEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO3FCQUMzQjs7UUFDMkIsbUJBQUM7S0FiN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==