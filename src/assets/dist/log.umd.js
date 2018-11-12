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
                        template: "\n    <iframe frameborder=\"0\" src=\"http://localhost:5601/app/kibana#/visualize/edit/f8290060-4c88-11e8-b3d7-01146121b73d?embed=true&_g=(refreshInterval:(pause:!f,value:900000),time:(from:now-24h,mode:quick,to:now))&_a=(filters:!(),linked:!f,query:(language:lucene,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(),schema:metric,type:count),(enabled:!t,id:'2',params:(customInterval:'2h',extended_bounds:(),field:timestamp,interval:auto,min_doc_count:1),schema:segment,type:date_histogram),(enabled:!t,id:'3',params:(field:FlightDelayType,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:'1',otherBucket:!f,otherBucketLabel:Other,size:5),schema:group,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),legendPosition:right,seriesParams:!((data:(id:'1',label:Count),drawLinesBetweenPoints:!t,interpolate:cardinal,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),type:area,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Count),type:value))),title:'%5BFlights%5D+Delay+Type',type:area))\" height=\"auto\" width=\"100%\"></iframe>\n  ",
                        styles: ['/log.component.css']
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbG9nL2xpYi9sb2cuc2VydmljZS50cyIsIm5nOi8vbG9nL2xpYi9sb2cuY29tcG9uZW50LnRzIiwibmc6Ly9sb2cvbGliL2xvZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29zLWxvZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCJodHRwOi8vbG9jYWxob3N0OjU2MDEvYXBwL2tpYmFuYSMvZGFzaGJvYXJkLzdhZGZhNzUwLTRjODEtMTFlOC1iM2Q3LTAxMTQ2MTIxYjczZD9lbWJlZD10cnVlJl9nPShyZWZyZXNoSW50ZXJ2YWwlM0EocGF1c2UlM0EhZiUyQ3ZhbHVlJTNBOTAwMDAwKSUyQ3RpbWUlM0EoZnJvbSUzQW5vdy0yNGglMkNtb2RlJTNBcXVpY2slMkN0byUzQW5vdykpXCIgaGVpZ2h0PVwiYXV0b1wiIHdpZHRoPVwiMTAwJVwiPjwvaWZyYW1lPlxuICBgLFxuICBzdHlsZXM6IFsnL2xvZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgXG5pbXBvcnQgeyBDdXN0b21pemVNb2R1bGUgIH0gZnJvbSAnY3VzdG9taXplJztcbmltcG9ydCB7IExvZ0NvbXBvbmVudCB9IGZyb20gJy4vbG9nLmNvbXBvbmVudCc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb2dDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEN1c3RvbWl6ZU1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJywgcGF0aE1hdGNoOiAnZnVsbCcsIGNvbXBvbmVudDogTG9nQ29tcG9uZW50XG4gICAgICB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW0xvZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTG9nTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkN1c3RvbWl6ZU1vZHVsZSIsIlJvdXRlck1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7eUJBSkQ7S0FFQTs7Ozs7O0FDRkE7UUFXRTtTQUFpQjs7OztRQUVqQiwrQkFBUTs7O1lBQVI7YUFDQzs7b0JBWkZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDJSQUVUO2lDQUNRLG9CQUFvQjtxQkFDOUI7Ozs7UUFRRCxtQkFBQztLQWREOzs7Ozs7QUNGQTtRQUtBO1NBYTBCOztvQkFiekJDLFdBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7d0JBQzVCLE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7NEJBQ1pDLHlCQUFlOzRCQUNmQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQztnQ0FDcEI7b0NBQ0UsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZO2lDQUNyRDs2QkFDRixDQUFDO3lCQUNIO3dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztxQkFDeEI7O1FBQ3dCLGdCQUFDO0tBYjFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=