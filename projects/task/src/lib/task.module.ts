import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { TaskComponent } from './task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: TaskComponent
      }
    ])
  ],
  exports: [TaskComponent]
})
export class TaskModule { }
