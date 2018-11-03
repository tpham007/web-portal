import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
//import { BrowserModule } from '@angular/platform-browser';
import { TabComponent } from './tab/tab.component';
import { TabsetComponent } from './tabset/tabset.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabComponent, TabsetComponent],
  exports: [TabComponent, TabsetComponent]
})
export class CustomizeModule { }
