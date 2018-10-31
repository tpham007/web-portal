import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shareCollection: any;
  title = "Harmonic Portal";
  imgSrc ="../../assets/img/logo1.png";
  constructor(private repo: RepositoryService) { 
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }
}
