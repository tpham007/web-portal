import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ReportComponent
      }
    ])
  ],
  exports: [ReportComponent]
})
export class ReportModule { }
