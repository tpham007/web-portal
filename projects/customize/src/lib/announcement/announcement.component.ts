import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from './announce';

@Component({
  selector: 'cos-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: Announcement;
  constructor() { }

  ngOnInit() {
  }

}
