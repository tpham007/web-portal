import { Component, OnInit, Input } from '@angular/core';
import { ShareCollection } from '../app.component';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() shareCollection: ShareCollection;
  constructor() { }

  ngOnInit() {
  }

}
