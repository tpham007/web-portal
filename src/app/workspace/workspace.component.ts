import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Params} from "@angular/router";
import { DomSanitizer, SafeResourceUrl}  from '@angular/platform-browser';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  shareCollection: any;
  public url: SafeResourceUrl;
  private counter = 0;

  constructor(private repo: RepositoryService, 
              private route: ActivatedRoute, 
              private sanitizer: DomSanitizer, 
              private router: Router) {
    this.shareCollection = this.repo.shareCollection;
    this.shareCollection.appChangedEvent = new EventEmitter<any>();
    this.listenForFallbackRoutingEvents();
  }


  /*
   If the iframed-in app can't resolve a URL itself it will post a message to the parent
   iframe (this app). Listen to those messages and attempt to navigate to that URL.
   */
  listenForFallbackRoutingEvents() {
    // Create IE + others compatible event handler
    const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventer(messageEvent, (e) => {
      if (e.data.navigateTo) {
        console.log('parent received message!:  ', e.data);
        let url = e.data.navigateTo;
        console.log(url);
        this.router.navigateByUrl(url);
      }
    }, false);
  }
  ngOnInit() {
    let THIS = this;
    this.route.url.subscribe(urlSegment => {
      if (urlSegment.length >= 2) {
        this.repo.getApplication(urlSegment[1].path).then(function(data) {
          if (data != null) {
            THIS.shareCollection.selectedApp = data;
            THIS.shareCollection.shownAppType = THIS.shareCollection.selectedApp.type;
            THIS.shareCollection.appChangedEvent.emit(data);
          }
        });
      }
      // Angular by default sanitises a URL, we need to bypass that so the full URL is rendered
      // NOTE: Need to look into security considerations of this
      // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl);
    });
  }
}
