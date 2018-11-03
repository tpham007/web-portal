import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { SchedulerComponent } from './scheduler.component';

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: SchedulerComponent
      }
    ])
  ],
  exports: [SchedulerComponent]
})
export class SchedulerModule { }
