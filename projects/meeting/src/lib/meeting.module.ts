import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { MeetingComponent } from './meeting.component';

@NgModule({
  declarations: [MeetingComponent],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: MeetingComponent
      }
    ])
  ],
  exports: [MeetingComponent]
})
export class MeetingModule { }
