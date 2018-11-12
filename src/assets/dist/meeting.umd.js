(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common'), require('customize')) :
    typeof define === 'function' && define.amd ? define('meeting', ['exports', '@angular/core', '@angular/router', '@angular/common', 'customize'], factory) :
    (factory((global.meeting = {}),global.ng.core,global.ng.router,global.ng.common,global.customize));
}(this, (function (exports,i0,router,common,customize) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MeetingService = /** @class */ (function () {
        function MeetingService() {
        }
        MeetingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MeetingService.ctorParameters = function () { return []; };
        /** @nocollapse */ MeetingService.ngInjectableDef = i0.defineInjectable({ factory: function MeetingService_Factory() { return new MeetingService(); }, token: MeetingService, providedIn: "root" });
        return MeetingService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MeetingComponent = /** @class */ (function () {
        function MeetingComponent() {
        }
        /**
         * @return {?}
         */
        MeetingComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MeetingComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cos-meeting',
                        template: "\n    <p>\n      meeting works!\n    </p>\n  ",
                        styles: ['/metting.component.css']
                    }] }
        ];
        /** @nocollapse */
        MeetingComponent.ctorParameters = function () { return []; };
        return MeetingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var MeetingModule = /** @class */ (function () {
        function MeetingModule() {
        }
        MeetingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [MeetingComponent],
                        imports: [
                            common.CommonModule,
                            customize.CustomizeModule,
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: MeetingComponent
                                }
                            ])
                        ],
                        exports: [MeetingComponent]
                    },] }
        ];
        return MeetingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.MeetingService = MeetingService;
    exports.MeetingComponent = MeetingComponent;
    exports.MeetingModule = MeetingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVldGluZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL21lZXRpbmcvbGliL21lZXRpbmcuc2VydmljZS50cyIsIm5nOi8vbWVldGluZy9saWIvbWVldGluZy5jb21wb25lbnQudHMiLCJuZzovL21lZXRpbmcvbGliL21lZXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWVldGluZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb3MtbWVldGluZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtZWV0aW5nIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbJy9tZXR0aW5nLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZWV0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IE1lZXRpbmdDb21wb25lbnQgfSBmcm9tICcuL21lZXRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVldGluZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3VzdG9taXplTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgY29tcG9uZW50OiBNZWV0aW5nQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW01lZXRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lZXRpbmdNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ3VzdG9taXplTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs2QkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsK0NBSVQ7aUNBQ1Esd0JBQXdCO3FCQUNsQzs7OztRQVFELHVCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQU1BO1NBYThCOztvQkFiN0JDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDaEMsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTs0QkFDWkMseUJBQWU7NEJBQ2ZDLG1CQUFZLENBQUMsUUFBUSxDQUFDO2dDQUNwQjtvQ0FDRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGdCQUFnQjtpQ0FDekQ7NkJBQ0YsQ0FBQzt5QkFDSDt3QkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDNUI7O1FBQzRCLG9CQUFDO0tBYjlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=