import { Observable } from 'rxjs/Observable';
import { Application } from './application/application';
import { Http } from '@angular/http';
import { Injectable, Compiler, Injector } from '@angular/core';
import { RepositoryService } from './repository.service';
import { RouterService } from './router.service';
import { Route } from '@angular/router';
import 'rxjs/add/operator/map';

// Needed for the new modules
import * as HttpClient from '@angular/common/http';
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularClarity from '@clr/angular';
import * as BrowserModule  from '@angular/platform-browser';
import * as CustomizeModule from 'customize';

declare var SystemJS: any;

@Injectable()
export class ModuleService {
    source = `http://${window.location.host}/`;

    constructor(private injector: Injector,
                private compiler: Compiler, 
                private http: Http, 
                private repo: RepositoryService,
                private routerService: RouterService) {
        console.log(compiler);
    }
    initApps() {
        let THIS = this;
        let promise = new Promise((resolve, reject) => {
            THIS.repo.getApplications().then(function(applications) {
                let allp = [];
                applications.forEach(app => {
                    if (app.registered) {
                        let p = new Promise((resolve, reject) => {
                            THIS.loadModuleSystemJS(app).then((exports) => {
                                THIS.routerService.createAndRegisterRoute(app, exports);
                                resolve();
                            }, (err) => {
                                console.log(`${app.moduleName} could not be found, did you copy the umd file to ${app.location}?`);
                                console.log('error=' + err);
                            }); 
                        });
                        allp.push(p);
                    }
                });
                Promise.all(allp).then(rs => resolve());
            });
        });
        return promise;
    }
    loadModuleSystemJS(moduleInfo: any): Promise<any> {
        let url = this.source + moduleInfo.location;
        SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
        SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
        SystemJS.set('@angular/common/http', SystemJS.newModule(HttpClient));
        SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
        SystemJS.set('@angular/platform-browser', SystemJS.newModule(BrowserModule));
        SystemJS.set('@clr/angular', SystemJS.newModule(AngularClarity));
        SystemJS.set('customize', SystemJS.newModule(CustomizeModule));

        // now, import the new module
        return SystemJS.import(`${url}`).then((module) => {
            console.log(module);
            return this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`]).then(compiled => {
                console.log(compiled);
                return module;
            });
        });
    }
}