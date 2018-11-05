import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { interval } from 'rxjs';

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
  }
  hideApp() {
    if (this.shareCollection.pinApp == false) {
      let timer = interval(300).subscribe(() => {
        if (this.currentX < this.appWorkspace.nativeElement.clientWidth) {
          this.shareCollection.showApp = false;
        }
        timer.unsubscribe();
      });
    }
  }
}
