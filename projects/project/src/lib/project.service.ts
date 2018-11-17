import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) { }
  async getProjects(): Promise<any> {
    try {
      let dataUrl = '../assets/projects.json';
      let response = await this.http.get(dataUrl).toPromise();
      return response;
    } catch (error) {
      return [];
    }
  }
}
