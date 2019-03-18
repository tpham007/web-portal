import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { UserComponent, UserHarmonicIdComponent } from './user.component';
import { CustomizeModule  } from 'customize';
@NgModule({
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', 
        component: UserComponent,
        children: [
          { path: '', redirectTo: 'harmonicid'},
          { path: 'harmonicid', component: UserHarmonicIdComponent }
        ]
      }
    ])
  ],
  declarations: [UserComponent, UserHarmonicIdComponent],
  exports: [UserComponent, UserHarmonicIdComponent]
})
export class UserModule { }
