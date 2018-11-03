import { Observable } from 'rxjs/Observable';
import { Application } from './application/application';
import { Http } from '@angular/http';
import { Injectable, Compiler } from '@angular/core';
import { RepositoryService } from './repository.service';
import { RouterService } from './router.service';
import 'rxjs/add/operator/map';

// Needed for the new modules
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularClarity from '@clr/angular';
import * as BrowserModule  from '@angular/platform-browser';
import * as CustomizeModule from 'customize';



@Injectable()
export class ModuleService {
    source = `http://${window.location.host}/`;

    constructor(private compiler: Compiler, 
                private http: Http, 
                private repo: RepositoryService,
                private routerService: RouterService) {
        console.log(compiler);
    }
    initApps() {
        let THIS = this;
        let promise = new Promise((resolve, reject) => {
            THIS.repo.getApplications().then(function(applications) {
                applications.forEach(app => {
                    if (app.registered) {
                        THIS.loadModule(app).subscribe((exports) => {
                            THIS.routerService.createAndRegisterRoute(app, exports);
                            resolve();
                        }, () => console.log(`${app.moduleName} could not be found, did you copy the umd file to ${app.location}?`));
                    }
                });
            })
        });
        return promise;
    }
    loadModule(appInfo: Application): Observable<any> {
        let url = this.source + appInfo.location;
        return this.http.get(url)
            .map(res => res.text())
            .map(source => {
                const exports = {}; // this will hold module exports
                const modules = {   // this is the list of modules accessible by plugins
                    '@angular/core': AngularCore,
                    '@angular/common': AngularCommon,
                    '@angular/router': AngularRouter,
                    '@angular/platform-browser': BrowserModule,
                    '@clr/angular': AngularClarity,
                    'customize': CustomizeModule
                };

                // shim 'require' and eval
                const require: any = (module) => modules[module];
                eval(source);

                // Need to check if there is another solution for eval as this is described as 'Evil'

                this.compiler.compileModuleAndAllComponentsSync(exports[`${appInfo.moduleName}`])
                //console.log(exports); // disabled as this object is cleared anyway
                return exports;
            });
    }
}