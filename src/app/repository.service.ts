import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application/application';

export class ShareCollection {
  pinApp: boolean;
  showApp: boolean;
  bodyHeight: any;
  shownAppType: any;
  selectedApp: any;
  applications: any;
  appChangedEvent: any;
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  public shareCollection: ShareCollection;
  constructor(private http: HttpClient) { 
    this.shareCollection = new ShareCollection();
    this.shareCollection.pinApp = false;
    this.shareCollection.showApp = false;
    this.shareCollection.bodyHeight = window.innerHeight-60;
    this.shareCollection.shownAppType = 'Operation';
    this.shareCollection.applications = this.getApplications();
  }
  async getApplications(): Promise<Application[]> {
    try {
      if (this.shareCollection.applications == null) {
        let dataUrl = 'http://localhost:3000/vos-api/app/v1/apps';
        const response = await this.http.get(dataUrl).toPromise();
        this.shareCollection.applications = response;
        this.shareCollection.applications.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
      }
      return this.shareCollection.applications;
    } catch (error) {
      return [];
    }
  }
  async getApplication(path: string) {
    let applications = await this.getApplications();
    return applications.filter(app => app.path === path)[0];
  }
}
