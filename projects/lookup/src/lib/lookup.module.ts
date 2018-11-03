import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { LookupComponent } from './lookup.component';

@NgModule({
  declarations: [LookupComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: LookupComponent
      }
    ])
  ],
  exports: [LookupComponent]
})
export class LookupModule { }
