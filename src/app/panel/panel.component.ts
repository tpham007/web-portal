import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Router, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  shareCollection: any;
  topAppElm: any;
  bottomAppElm: any;
  constructor(private repo: RepositoryService, private router: Router) { 
    this.shareCollection = this.repo.shareCollection;
  }
  ngOnInit() {
    let THIS = this;
    this.router.events.subscribe(async routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        let params = routerEvent.url.split('/');
        if (params.length > 1 && params[1] !== '') {
          THIS.repo.shareCollection.selectedApp = null;
          THIS.repo.getApplication(params[1]).then(function(app) {
            if (app != null) {
              setTimeout( () => {
                THIS.repo.shareCollection.selectedApp = app;
                THIS.repo.shareCollection.shownAppType = THIS.repo.shareCollection.selectedApp.type;
                THIS.repo.shareCollection.showApp = false;
              }, 300);
            }
          });
        } else {
          THIS.repo.getApplication('dashboard').then(function(app) {
            if (app != null) {
              setTimeout( () => {
                THIS.repo.shareCollection.selectedApp = app;
                THIS.repo.shareCollection.shownAppType = THIS.repo.shareCollection.selectedApp.type;
                THIS.repo.shareCollection.showApp = false;
              }, 300);
            }
          });
        }
      }
    });
  }
  /*
  isTop() {
    if (this.topAppElm == null) {
      let topAppId = this.shareCollection.applications[0].id;
      this.topAppElm = document.getElementById(topAppId);
    }
    if (this.topAppElm != null) {      
      return this.topAppElm.parentElement.parentElement.parentElement.scrollTop <= 30;
    } else {
      return true;
    }
  }
  isBottom() {
    if (this.bottomAppElm == null) {
      let bottomAppId = this.shareCollection.applications[this.shareCollection.applications.length-1].id;
      this.bottomAppElm = document.getElementById(bottomAppId);
    }
    if (this.bottomAppElm != null) {
      var offs = this.bottomAppElm.parentElement.parentElement.parentElement.offsetHeight-(this.bottomAppElm.offsetTop+this.bottomAppElm.parentElement.parentElement.parentElement.scrollTop);
      console.log("offs="+offs);
      return  offs <= 65;
    } else {
      return true;
    }
  }
  */
}
