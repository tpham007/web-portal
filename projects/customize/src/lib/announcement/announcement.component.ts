import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Announcement } from './announce';

@Component({
  selector: 'hub-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: Announcement;
  constructor() { }

  ngOnInit() {
  }

}
