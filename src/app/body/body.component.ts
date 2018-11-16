import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @ViewChild('appWorkspace', {read: ElementRef}) appWorkspace: ElementRef; 
  shareCollection: any;
  timer: any;
  currentX; any;
  constructor(private repo: RepositoryService) {
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }
  mouseOver(event) {
    this.currentX = event.clientX;
    console.log('currentX:'+this.currentX);
  }
  hideApp() {
    if (this.shareCollection.pinApp == false) {      
      setTimeout( () => {
        console.log('this.currentX='+this.currentX+', clientWidth='+this.appWorkspace.nativeElement.clientWidth);
        let lbound = this.appWorkspace.nativeElement.clientWidth;
        lbound = lbound + (3*lbound/100);
        if (this.currentX < lbound) {
          this.shareCollection.showApp = false;
        }
      }, 300);
    }
  }
}
