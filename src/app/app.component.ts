import { Component, HostListener } from '@angular/core';
export class ShareCollection {
  showApp: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Harmonic Portal';
  height = window.innerHeight-180;
  shareCollection = new ShareCollection();
  constructor(){
    this.shareCollection.showApp = true;
  }
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.height = event.target.innerHeight-180;
  }
}
