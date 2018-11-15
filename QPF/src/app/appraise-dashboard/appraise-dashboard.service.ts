import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appraise } from './appraise';
@Injectable({
  providedIn: 'root'
})
export class AppraiseDashboardService {

  private appraiseUrls = 'http://localhost:3000/appraise';

  constructor(private http: HttpClient) { }
  
  getAppraiseData(): Observable<appraise[]> {
    return this.http.get<appraise[]>(this.appraiseUrls);
  }
}
