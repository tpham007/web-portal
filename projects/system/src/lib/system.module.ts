import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { SystemComponent } from './system.component';

@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: SystemComponent
      }
    ])
  ],
  exports: [SystemComponent]
})
export class SystemModule { }
