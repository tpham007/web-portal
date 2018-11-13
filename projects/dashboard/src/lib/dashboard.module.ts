import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { DashboardComponent } from './dashboard.component';
import { CustomizeModule  } from 'customize';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: DashboardComponent
      }
    ])
  ],
  exports: [DashboardComponent]
})
export class SettingModule { }

