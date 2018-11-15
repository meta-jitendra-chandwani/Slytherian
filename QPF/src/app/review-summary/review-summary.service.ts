import { Injectable } from '@angular/core';
import { ReviewSummary } from './reviewSummary';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewSummaryService {
  private reviewSummaryUrl = 'http://localhost:3000/reviewSummary';
  constructor(private http: HttpClient) { 
    
 
}
getReviewSummary(): Observable<ReviewSummary[]> {
  return this.http.get<ReviewSummary[]>(this.reviewSummaryUrl);
}
}
