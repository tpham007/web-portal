import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { AccountComponent, AccountInformationComponent, AccountInvoicesComponent } from './account.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AccountComponent, AccountInformationComponent, AccountInvoicesComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          { path: '', redirectTo: 'information'},
          { path: 'information', component: AccountInformationComponent },
          { path: 'invoices', component: AccountInvoicesComponent }
        ]    
      }
    ])
  ],
  exports: [AccountComponent, AccountInformationComponent, AccountInvoicesComponent]
})
export class AccountModule { }
