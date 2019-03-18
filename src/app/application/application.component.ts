import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { Application } from './application';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent implements OnInit {
  @Input() app: Application;
  shareCollection: any;
  constructor(private repo: RepositoryService) { 
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }  
}
