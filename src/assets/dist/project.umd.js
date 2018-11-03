(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('project', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.project = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ProjectService = /** @class */ (function () {
        function ProjectService() {
        }
        ProjectService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ProjectService.ctorParameters = function () { return []; };
        /** @nocollapse */ ProjectService.ngInjectableDef = i0.defineInjectable({ factory: function ProjectService_Factory() { return new ProjectService(); }, token: ProjectService, providedIn: "root" });
        return ProjectService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ProjectComponent = /** @class */ (function () {
        function ProjectComponent() {
        }
        /**
         * @return {?}
         */
        ProjectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ProjectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-project',
                        template: "\n    <p>\n      project works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ProjectComponent.ctorParameters = function () { return []; };
        return ProjectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var ProjectModule = /** @class */ (function () {
        function ProjectModule() {
        }
        ProjectModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ProjectComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ProjectComponent
                                }
                            ])
                        ],
                        exports: [ProjectComponent]
                    },] }
        ];
        return ProjectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.ProjectService = ProjectService;
    exports.ProjectComponent = ProjectComponent;
    exports.ProjectModule = ProjectModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Byb2plY3QvbGliL3Byb2plY3Quc2VydmljZS50cyIsIm5nOi8vcHJvamVjdC9saWIvcHJvamVjdC5jb21wb25lbnQudHMiLCJuZzovL3Byb2plY3QvbGliL3Byb2plY3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3MtcHJvamVjdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBwcm9qZWN0IHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9qZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IFByb2plY3RDb21wb25lbnQgfSBmcm9tICcuL3Byb2plY3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUHJvamVjdENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3VzdG9taXplTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgY29tcG9uZW50OiBQcm9qZWN0Q29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1Byb2plY3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ3VzdG9taXplTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsK0NBSVQ7cUJBRUY7Ozs7UUFRRCx1QkFBQztLQWhCRDs7Ozs7O0FDRkE7UUFNQTtTQWE4Qjs7b0JBYjdCQyxXQUFRLFNBQUM7d0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQ2hDLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLHlCQUFlOzRCQUNmQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0UsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0I7aUNBQ3pEOzZCQUNGLENBQUM7eUJBQ0g7d0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQzVCOztRQUM0QixvQkFBQztLQWI5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9