import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }
  getLeftApplications() {
    return this.http.get('../assets/left-applications.json');
  }
  getRightApplications() {
    return this.http.get('../assets/right-applications.json');
  }
}
