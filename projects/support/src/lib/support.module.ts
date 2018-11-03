import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { SupportComponent } from './support.component';

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: SupportComponent
      }
    ])
  ],
  exports: [SupportComponent]
})
export class SupportModule { }
