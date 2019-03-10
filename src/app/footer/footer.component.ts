import { Component, OnInit, Input } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{app.name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{app.description}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class AppInfoContent {
  @Input() app: any;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  shareCollection: any;
  constructor(private repo: RepositoryService, private modalService: NgbModal) { 
    this.shareCollection = this.repo.shareCollection;
  }

  ngOnInit() {
  }
  public showAppInfo() {
    const modalRef = this.modalService.open(AppInfoContent);
    modalRef.componentInstance.app = this.shareCollection.selectedApp;
  }
}
