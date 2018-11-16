import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { selfDevelopment } from './selfDevelopment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SelfDevelopmentService {

  private selfDevelopmentUrl = 'http://localhost:3000/selfDevelopment';

  constructor(private http: HttpClient) { }

  getSelfDevelopment(): Observable<selfDevelopment[]> {
    return this.http.get<selfDevelopment[]>(this.selfDevelopmentUrl);
  }
}
