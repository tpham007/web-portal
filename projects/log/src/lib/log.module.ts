import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { LogComponent } from './log.component';
@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: LogComponent
      }
    ])
  ],
  exports: [LogComponent]
})
export class LogModule { }
