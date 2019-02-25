import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: AccountComponent
      }
    ])
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
