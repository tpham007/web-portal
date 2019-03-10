import { BrowserModule } from '@angular/platform-browser';
import { NgModule, COMPILER_OPTIONS, CompilerFactory, Compiler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { ModuleService } from './module.service';
import { RouterService } from './router.service';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppInfoContent, FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ApplicationComponent } from './application/application.component';
import { BodyComponent } from './body/body.component';
import { PanelComponent } from './panel/panel.component';
import { ApplicationFilter } from './pipe/application.filter';
import { ApplicationOrder } from './pipe/application.order';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    WorkspaceComponent,
    ApplicationComponent,
    BodyComponent,
    PanelComponent,
    ApplicationFilter,
    ApplicationOrder,
    AppInfoContent,
  ],
  imports: [
    ClarityModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    AppInfoContent
  ],
  providers: [
    RouterService, ModuleService,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
}