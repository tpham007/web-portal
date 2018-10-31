import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from '../repository.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  shareCollection: any;
  constructor(private repo: RepositoryService) {
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }

}
