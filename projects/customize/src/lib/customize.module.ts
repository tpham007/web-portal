import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { TabComponent } from './tab/tab.component';
import { TabsetComponent } from './tabset/tabset.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { Safe } from './pipe/html.safe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [TabComponent, TabsetComponent, AnnouncementComponent, Safe],
  exports: [TabComponent, TabsetComponent, AnnouncementComponent, Safe]
})
export class CustomizeModule { }
