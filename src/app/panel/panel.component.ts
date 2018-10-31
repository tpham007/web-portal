import { Component, OnInit, ViewChild } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @ViewChild('appPanel') panel; 
  shareCollection: any;
  mApplications: any;
  roll = false;
  topAppElm: any;
  bottomAppElm: any;
  constructor(private repo: RepositoryService) { 
    this.shareCollection = this.repo.shareCollection;
    this.mApplications = {};
  }
  async ngOnInit() {
    let applications = await this.repo.getApplications();
    for(let app of applications) {
      let tApplications = this.mApplications[app.type];
      if (tApplications == null) {
        tApplications = [];
        tApplications.push(app);
        this.mApplications[app.type] = tApplications;
      } else {
        this.mApplications[app.type].push(app);
      }
    }
    this.shareCollection.appChangedEvent.subscribe(app => this.selectApp(app));
  }
  selectApp(app: any) {
    let idx = this.mApplications[app.type].indexOf(app);
    this.mApplications[app.type].splice(idx, 1);
    this.mApplications[app.type].unshift(app);
    this.panel.nativeElement.scrollTop = 0;
    this.topAppElm = null;
    this.bottomAppElm = null;
  }
  toggleApp() {
    this.shareCollection.showApp = !this.shareCollection.showApp;
  }
  isTop() {
    if (this.topAppElm == null) {
      let topAppId = this.mApplications[this.shareCollection.shownAppType][0].id;
      this.topAppElm = document.getElementById(topAppId);
    }
    let pos = (this.topAppElm.offsetTop-this.topAppElm.parentElement.scrollTop);
    //console.log('top:' + pos);
    return pos >= 110;
  }
  isBottom() {
    if (this.bottomAppElm == null) {
      let tApplcations = this.mApplications[this.shareCollection.shownAppType];
      let bottomAppId = tApplcations[tApplcations.length-1].id;
      this.bottomAppElm = document.getElementById(bottomAppId);
    }
    let pos = (this.bottomAppElm.offsetTop -this.bottomAppElm.parentElement.scrollTop-this.bottomAppElm.parentElement.offsetHeight+this.bottomAppElm.parentElement.offsetTop);
    //console.log('bottom:' + pos);
    return pos <= 120;
  }
  async changeAppType(type: any) {
    if (this.shareCollection.shownAppType != type) {
      this.shareCollection.shownAppType = null;
      this.topAppElm = null;
      this.bottomAppElm = null;
      window.setTimeout(function(shareCollection, type) {
        shareCollection.shownAppType = type;
      }, 50, this.shareCollection, type);
    }
  }
}
