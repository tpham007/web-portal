import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { SettingComponent } from './setting.component';

@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: SettingComponent
      }
    ])
  ],
  exports: [SettingComponent]
})
export class SettingModule { }
