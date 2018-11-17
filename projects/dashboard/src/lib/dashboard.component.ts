import { Component, OnInit } from '@angular/core';
import { Announcement } from 'customize';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'cos-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  announcements: any;
  constructor(private repo: DashboardService) { }

  async ngOnInit() {
    this.announcements = await this.repo.getAnnouncements();
  }
}
