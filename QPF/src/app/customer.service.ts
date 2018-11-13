import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timelines } from './timelines';
import { achievements } from './achievement-names';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';
  private timeUrls = 'http://localhost:3000/timelines';
  private achievementUrls = 'http://localhost:3000/achievements';
  constructor(private http: HttpClient) { }

  getTimelines(): Observable<timelines[]> {
    debugger
    return this.http.get<timelines[]>(this.timeUrls);
  }

  getAchievements(): Observable<achievements[]> {
    debugger
    return this.http.get<achievements[]>(this.achievementUrls);
  }

}