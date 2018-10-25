import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { ShareCollection } from '../app.component';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() shareCollection: ShareCollection;
  applications: any;
  roll = false;
  topAppElm: any;
  bottomAppElm: any;
  constructor(private repo: RepositoryService) { }
  ngOnInit() {
    this.repo.getApplications(this.shareCollection.shownAppType).subscribe(data => {
      this.applications = data;
    }, // Bind to view
    err => {
      // Log errors if any
      console.log('error: ', err);
    });
  }
  toggleApp() {
    this.shareCollection.showApp = !this.shareCollection.showApp;
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
  changeAppType(type: String) {
    if(this.shareCollection.shownAppType != type) {
      this.shareCollection.shownAppType = type;
      this.repo.getApplications(type).subscribe(data => {
        this.applications = data;
        this.topAppElm = null;
        this.bottomAppElm = null;
      }, // Bind to view
      err => {
        // Log errors if any
        console.log('error: ', err);
      });
    }
  }
}
