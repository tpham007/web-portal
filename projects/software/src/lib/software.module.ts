import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { SoftwareComponent } from './software.component';

@NgModule({
  declarations: [SoftwareComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: SoftwareComponent
      }
    ])
  ],
  exports: [SoftwareComponent]
})
export class SoftwareModule { }
