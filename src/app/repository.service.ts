import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }
  getApplications(type: String) {
    if (type == 'Operation') {
      return this.http.get('../assets/operation-applications.json');
    } else {
      return this.http.get('../assets/tool-applications.json');
    }
  }
}
