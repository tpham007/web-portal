import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { SettingComponent, SettingNotificationsComponent } from './setting.component';

@NgModule({
  declarations: [SettingComponent, SettingNotificationsComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', 
        component: SettingComponent,
        children: [
          { path: '', redirectTo: 'notifications'},
          { path: 'notifications', component: SettingNotificationsComponent }
        ] 
      }
    ])
  ],
  exports: [SettingComponent, SettingNotificationsComponent]
})
export class SettingModule { }
