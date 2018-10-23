import { Component, OnInit, Input } from '@angular/core';
import { ShareCollection } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() shareCollection: ShareCollection;
  title = "Harmonic Portal";
  imgSrc ="../../assets/img/logoA.png";
  constructor() { 
  }

  ngOnInit() {
  }
  toggleApp() {
    this.shareCollection.showApp = !(this.shareCollection.showApp);
  }
}
