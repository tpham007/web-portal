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
                        template: "\n    <p>\n      lookup works!\n    </p>\n  ",
                        styles: ['/lookup.component.css']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9va3VwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9va3VwL2xpYi9sb29rdXAuc2VydmljZS50cyIsIm5nOi8vbG9va3VwL2xpYi9sb29rdXAuY29tcG9uZW50LnRzIiwibmc6Ly9sb29rdXAvbGliL2xvb2t1cC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb29rdXBTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLWxvb2t1cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBsb29rdXAgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFsnL2xvb2t1cC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9va3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IExvb2t1cENvbXBvbmVudCB9IGZyb20gJy4vbG9va3VwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xvb2t1cENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ3VzdG9taXplTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLCBwYXRoTWF0Y2g6ICdmdWxsJywgY29tcG9uZW50OiBMb29rdXBDb21wb25lbnRcbiAgICAgIH1cbiAgICBdKVxuICBdLFxuICBleHBvcnRzOiBbTG9va3VwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMb29rdXBNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiQ3VzdG9taXplTW9kdWxlIiwiUm91dGVyTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7Ozs0QkFKRDtLQUVBOzs7Ozs7QUNGQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGtDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsOENBSVQ7aUNBQ1EsdUJBQXVCO3FCQUNqQzs7OztRQVFELHNCQUFDO0tBaEJEOzs7Ozs7QUNGQTtRQU1BO1NBYTZCOztvQkFiNUJDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQy9CLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLHlCQUFlOzRCQUNmQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0UsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlO2lDQUN4RDs2QkFDRixDQUFDO3lCQUNIO3dCQUNELE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztxQkFDM0I7O1FBQzJCLG1CQUFDO0tBYjdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=