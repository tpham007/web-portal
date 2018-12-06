import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }
  async getAnnouncements(): Promise<any> {
    try {
      let dataUrl = '/vos-api/announcements';
      const response = await this.http.get(dataUrl).toPromise();
      return response;
    } catch (error) {
      return [];
    }
  }
}
