import { Component, OnInit, OnDestroy, AfterContentInit , Input, Output, ContentChildren, EventEmitter} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hub-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent implements OnInit, AfterContentInit  {
  @Input() vertical;
  @Output() onSelect = new EventEmitter();
  @ContentChildren(TabComponent) tabs;
  activeTab: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeTab = this.route.snapshot['_routerState'].url.split('/', 3)[2];
  }
  ngAfterContentInit() {
    const tabs = this.tabs.toArray();
    const actives = this.tabs.filter(t => { return t.active });

    if(actives.length > 1) {
      console.error(`Multiple active tabs set 'active'`);
    } else if(!actives.length && tabs.length) {
      tabs[0].active = true;
    }
  }
  public isActive(tab) {
    return tab == this.activeTab;
  }
}
