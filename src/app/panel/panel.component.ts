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
  mApplications: any;
  applications: any;
  roll = false;
  topAppElm: any;
  bottomAppElm: any;
  constructor(private repo: RepositoryService) { }
  ngOnInit() {
    this.mApplications = {};
    this.repo.getApplications(this.shareCollection.shownAppType).subscribe(data => {
      this.applications = data;
      this.mApplications[this.shareCollection.shownAppType] = data;
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
    let pos = (this.bottomAppElm.offsetTop -this.bottomAppElm.parentElement.scrollTop-this.bottomAppElm.parentElement.offsetHeight+this.bottomAppElm.parentElement.offsetTop);
    return pos <= 130;
  }
  changeAppType(type: any) {
    if (this.shareCollection.shownAppType != type) {
      this.shareCollection.shownAppType = null;
      this.topAppElm = null;
      this.bottomAppElm = null;
      if (this.mApplications[type] == null) {
        this.repo.getApplications(type).subscribe(data => {
          this.applications = data;
          this.mApplications[type] = data;
          window.setTimeout(function(shareCollection, type) {
            shareCollection.shownAppType = type;
          },50, this.shareCollection, type);
        },
        err => {
          console.log('error: ', err);
        });
      } else {
        this.applications = this.mApplications[type];
        window.setTimeout(function(shareCollection, type) {
          shareCollection.shownAppType = type;
        },50, this.shareCollection, type);
      }
    }
  }
}
