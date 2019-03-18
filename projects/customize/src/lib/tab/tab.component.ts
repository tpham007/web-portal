import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hub-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() title = '';
  @Input() active = false;
  @Input() disabled = false;
  @Input() url = '';
  constructor() { }

  ngOnInit() {
  }

}
