import { Component, HostListener } from '@angular/core';
export class ShareCollection {
  showApp: boolean;
  bodyHeight: any;
  shownAppType: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harmonic Portal';
  shareCollection = new ShareCollection();
  constructor(){
    this.shareCollection.showApp = true;
    this.shareCollection.bodyHeight = window.innerHeight-180;
    this.shareCollection.shownAppType = 'Operation';
  }
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.shareCollection.bodyHeight = event.target.innerHeight-180;
  }
}
