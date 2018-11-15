import { Injectable } from '@angular/core';
import { timelines } from '../_model/timelines';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private timeUrls = 'http://localhost:3000/timelines';

  constructor(private http: HttpClient) { }
  
  getTimelines(): Observable<timelines[]> {
    return this.http.get<timelines[]>(this.timeUrls);
  }
}
