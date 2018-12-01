import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  shareCollection: any;
  timer: any;
  currentX; any;
  constructor(private repo: RepositoryService) {
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }
  hideApp() {
    if (this.shareCollection.pinApp == false) {      
      this.shareCollection.showApp = false;
    }
  }
}
