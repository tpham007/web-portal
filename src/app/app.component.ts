import { Component, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';
import { RepositoryService } from './repository.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'Harmonic Portal';
  public shareCollection: any;
  constructor(private repo: RepositoryService){
    this.shareCollection = this.repo.shareCollection;
    this.shareCollection.appEvent = new EventEmitter<any>();
  }
  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.shareCollection.bodyHeight = event.target.innerHeight-60;
  }
}
