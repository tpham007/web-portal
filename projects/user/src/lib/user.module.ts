import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { UserComponent } from './user.component';
import { CustomizeModule  } from 'customize';
@NgModule({
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: UserComponent
      }
    ])
  ],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule { }
