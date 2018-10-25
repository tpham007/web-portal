import { Component, OnInit, Input} from '@angular/core';
import { ShareCollection } from '../app.component';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  @Input() shareCollection: ShareCollection;
  show: any;
  constructor() { 
    this.show = false;
  }

  ngOnInit() {
  }
}
