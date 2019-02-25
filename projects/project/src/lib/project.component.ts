import { Component, OnInit} from '@angular/core';
import { ProjectService } from './project.service';
declare var SystemJS: any;
@Component({
  selector: 'hub-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any;
  constructor(private repo: ProjectService) { }
  ngOnInit() {
    let THIS = this;
    SystemJS.import(`https://p.trellocdn.com/embed.min.js`).then(async function() {
      THIS.projects = await THIS.repo.getProjects();
    });
  }
}
