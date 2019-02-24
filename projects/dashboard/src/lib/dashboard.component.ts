import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Announcement } from 'customize';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'cos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy {
  announcements: any;
  constructor(private repo: DashboardService) { }
  async ngOnInit() {
    this.announcements = await this.repo.getAnnouncements();
  }
  async ngAfterViewInit() {
    await new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = "https://sdk.librato.com/embedding/librato-sdk-v1.2.3-min.js";
      scriptElement.setAttribute("data-librato_email", "app76061009@heroku.com");
      scriptElement.setAttribute("data-librato_token", "552df174c9b82e4422c6d6b6fb51d615dde8ec3d98dd66fe2b6475e987500d56");
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }
  ngOnDestroy() {
    var allsuspects=document.getElementsByTagName("script");
    for (var i=allsuspects.length; i>=0; i--) {
      if (allsuspects[i] && allsuspects[i].getAttribute("src")!=null && allsuspects[i].getAttribute("src").indexOf("https://sdk.librato.com/embedding/librato-sdk-v1.2.3-min.js")!=-1) {
          allsuspects[i].parentNode.removeChild(allsuspects[i]);
      }
    }
  }
}
