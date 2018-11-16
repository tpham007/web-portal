import { Component, OnInit, ViewChild } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Router, NavigationEnd  } from '@angular/router';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @ViewChild('appPanel') panel; 
  shareCollection: any;
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
              }, 300);
            }
          });
        }
      }
    });
  }
}
