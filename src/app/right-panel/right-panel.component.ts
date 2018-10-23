import { Component, OnInit , Input} from '@angular/core';
import { RepositoryService } from '../repository.service';
import { ShareCollection } from '../app.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  @Input() shareCollection: ShareCollection;
  applications: any;
  roll = false;
  topAppElm: any;
  bottomAppElm: any;
  constructor(private repo: RepositoryService) { }
  ngOnInit() {
    this.repo.getRightApplications().subscribe(data => {
      this.applications = data;
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }
  isTop() {
    if (this.topAppElm == null) {
      let topAppId = this.applications[0].id;
      this.topAppElm = document.getElementById(topAppId);
    }
    return (this.topAppElm.offsetTop-this.topAppElm.parentElement.scrollTop) >= 0;
  }
  isBottom() {
    if (this.bottomAppElm == null) {
      let bottomAppId = this.applications[this.applications.length-1].id;
      this.bottomAppElm = document.getElementById(bottomAppId);
    }
    return (this.bottomAppElm.offsetTop -this.bottomAppElm.parentElement.scrollTop-this.bottomAppElm.parentElement.offsetHeight+this.bottomAppElm.parentElement.offsetTop) <= 2;
  }
}
