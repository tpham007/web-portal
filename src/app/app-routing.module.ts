import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { ModuleService } from './module.service';
const routes: Routes = [  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

export function configServiceFactory(injector: Injector): Function {
  return () => {
    console.log('Load dependencies');
    let moduleService = injector.get(ModuleService);
    return moduleService.initApps();
  };
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { provide: APP_INITIALIZER, useFactory: configServiceFactory, deps: [Injector], multi: true }
  ]
})

export class AppRoutingModule { }
