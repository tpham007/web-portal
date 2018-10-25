import { Component, OnInit, AfterViewInit, Input, ElementRef, ViewChild} from '@angular/core';
import { Application } from './application';
import { ShareCollection } from '../app.component';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  @Input() shareCollection: ShareCollection;
  @Input() app: Application;
  @ViewChild("appHead") myBody: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  selectMe() {
    this.shareCollection.selectedApp = this.app;
  }
}
