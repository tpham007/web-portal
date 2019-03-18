import { Component, OnInit, OnDestroy, AfterContentInit , Input, Output, ContentChildren, EventEmitter} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hub-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit  {
  @Input() vertical;
  @Output() onSelect = new EventEmitter();
  @ContentChildren(TabComponent) tabs;
  
  constructor() { }

  ngOnInit() {
  }
}
