import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  shareCollection: any;
  constructor(private repo: RepositoryService) { 
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }

}
