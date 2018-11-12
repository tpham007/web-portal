(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('task', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.task = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TaskService = /** @class */ (function () {
        function TaskService() {
        }
        TaskService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        TaskService.ctorParameters = function () { return []; };
        /** @nocollapse */ TaskService.ngInjectableDef = i0.defineInjectable({ factory: function TaskService_Factory() { return new TaskService(); }, token: TaskService, providedIn: "root" });
        return TaskService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TaskComponent = /** @class */ (function () {
        function TaskComponent() {
        }
        /**
         * @return {?}
         */
        TaskComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TaskComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-task',
                        template: "\n    <p>\n      task works!\n    </p>\n  ",
                        styles: ['/task.component.css']
                    }] }
        ];
        /** @nocollapse */
        TaskComponent.ctorParameters = function () { return []; };
        return TaskComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TaskModule = /** @class */ (function () {
        function TaskModule() {
        }
        TaskModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [TaskComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: TaskComponent
                                }
                            ])
                        ],
                        exports: [TaskComponent]
                    },] }
        ];
        return TaskModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.TaskService = TaskService;
    exports.TaskComponent = TaskComponent;
    exports.TaskModule = TaskModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3Rhc2svbGliL3Rhc2suc2VydmljZS50cyIsIm5nOi8vdGFzay9saWIvdGFzay5jb21wb25lbnQudHMiLCJuZzovL3Rhc2svbGliL3Rhc2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFza1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3MtdGFzaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB0YXNrIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbJy90YXNrLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IFRhc2tDb21wb25lbnQgfSBmcm9tICcuL3Rhc2suY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGFza0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3VzdG9taXplTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgY29tcG9uZW50OiBUYXNrQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1Rhc2tDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ3VzdG9taXplTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OzswQkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGdDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsNENBSVQ7aUNBQ1EscUJBQXFCO3FCQUMvQjs7OztRQVFELG9CQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQU1BO1NBYTJCOztvQkFiMUJDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUM7d0JBQzdCLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLHlCQUFlOzRCQUNmQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0UsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhO2lDQUN0RDs2QkFDRixDQUFDO3lCQUNIO3dCQUNELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztxQkFDekI7O1FBQ3lCLGlCQUFDO0tBYjNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=