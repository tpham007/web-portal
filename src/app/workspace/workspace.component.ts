import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  shareCollection: any;
  constructor(private repo: RepositoryService) {
    this.shareCollection = this.repo.shareCollection;
  }
  ngOnInit() {}
}
