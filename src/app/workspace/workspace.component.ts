import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  show: any;
  constructor() { 
    this.show = false;
  }

  ngOnInit() {
  }
}
