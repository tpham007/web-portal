import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { CustomizeModule  } from 'customize';
import { ProjectComponent } from './project.component';
import { ProjectLinkDirective } from './project-link.directive';

@NgModule({
  declarations: [ProjectComponent, ProjectLinkDirective],
  imports: [
    CommonModule,
    CustomizeModule,
    RouterModule.forChild([
      {
        path: '', pathMatch: 'full', component: ProjectComponent
      }
    ])
  ],
  exports: [ProjectComponent]
})
export class ProjectModule { }
