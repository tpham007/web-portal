import { Component, OnInit } from '@angular/core';
import { Announcement } from 'customize';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'cos-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  announcement: Announcement;
  constructor(private repo: DashboardService) { }

  async ngOnInit() {
    let announcements = await this.repo.getAnnouncements();
    this.announcement = announcements[0];
  }
}
