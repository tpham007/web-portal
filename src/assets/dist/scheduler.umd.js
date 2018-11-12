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
                        template: "\n    <p>\n      scheduler works!\n    </p>\n  ",
                        styles: ['/scheduler.component.css']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2NoZWR1bGVyL2xpYi9zY2hlZHVsZXIuc2VydmljZS50cyIsIm5nOi8vc2NoZWR1bGVyL2xpYi9zY2hlZHVsZXIuY29tcG9uZW50LnRzIiwibmc6Ly9zY2hlZHVsZXIvbGliL3NjaGVkdWxlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLXNjaGVkdWxlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBzY2hlZHVsZXIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFsnL3NjaGVkdWxlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IFNjaGVkdWxlckNvbXBvbmVudCB9IGZyb20gJy4vc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NjaGVkdWxlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3VzdG9taXplTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgY29tcG9uZW50OiBTY2hlZHVsZXJDb21wb25lbnRcbiAgICAgIH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbU2NoZWR1bGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZXJNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ3VzdG9taXplTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzsrQkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHFDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUsaURBSVQ7aUNBQ1EsMEJBQTBCO3FCQUNwQzs7OztRQVFELHlCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQU1BO1NBYWdDOztvQkFiL0JDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtCQUFrQjtpQ0FDM0Q7NkJBQ0YsQ0FBQzt5QkFDSDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDOUI7O1FBQzhCLHNCQUFDO0tBYmhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=