(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('scheduler', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.scheduler = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SchedulerService = /** @class */ (function () {
        function SchedulerService() {
        }
        SchedulerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SchedulerService.ctorParameters = function () { return []; };
        /** @nocollapse */ SchedulerService.ngInjectableDef = i0.defineInjectable({ factory: function SchedulerService_Factory() { return new SchedulerService(); }, token: SchedulerService, providedIn: "root" });
        return SchedulerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SchedulerComponent = /** @class */ (function () {
        function SchedulerComponent() {
        }
        /**
         * @return {?}
         */
        SchedulerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SchedulerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-scheduler',
                        template: "\n    <p>\n      scheduler works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SchedulerComponent.ctorParameters = function () { return []; };
        return SchedulerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var SchedulerModule = /** @class */ (function () {
        function SchedulerModule() {
        }
        SchedulerModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SchedulerComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: SchedulerComponent
                                }
                            ])
                        ],
                        exports: [SchedulerComponent]
                    },] }
        ];
        return SchedulerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.SchedulerService = SchedulerService;
    exports.SchedulerComponent = SchedulerComponent;
    exports.SchedulerModule = SchedulerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2NoZWR1bGVyL2xpYi9zY2hlZHVsZXIuc2VydmljZS50cyIsIm5nOi8vc2NoZWR1bGVyL2xpYi9zY2hlZHVsZXIuY29tcG9uZW50LnRzIiwibmc6Ly9zY2hlZHVsZXIvbGliL3NjaGVkdWxlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLXNjaGVkdWxlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzY2hlZHVsZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNjaGVkdWxlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7IFxuaW1wb3J0IHsgQ3VzdG9taXplTW9kdWxlICB9IGZyb20gJ2N1c3RvbWl6ZSc7XG5pbXBvcnQgeyBTY2hlZHVsZXJDb21wb25lbnQgfSBmcm9tICcuL3NjaGVkdWxlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTY2hlZHVsZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEN1c3RvbWl6ZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogU2NoZWR1bGVyQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1NjaGVkdWxlckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkN1c3RvbWl6ZU1vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7K0JBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFhRTtTQUFpQjs7OztRQUVqQixxQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLGlEQUlUO3FCQUVGOzs7O1FBUUQseUJBQUM7S0FoQkQ7Ozs7OztBQ0ZBO1FBTUE7U0FhZ0M7O29CQWIvQkMsV0FBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3dCQUNsQyxPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZOzRCQUNaQyx5QkFBZTs0QkFDZkMsbUJBQVksQ0FBQyxRQUFRLENBQUM7Z0NBQ3BCO29DQUNFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsa0JBQWtCO2lDQUMzRDs2QkFDRixDQUFDO3lCQUNIO3dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUM5Qjs7UUFDOEIsc0JBQUM7S0FiaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==