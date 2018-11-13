import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timelines } from './timelines';
import { appraise } from './appraise';
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
  private appraiseUrls =  'http://localhost:3001/appraise';
  private achievementUrls = 'http://localhost:3000/achievements';
  constructor(private http: HttpClient) { }

  getTimelines(): Observable<timelines[]> {
    debugger
    return this.http.get<timelines[]>(this.timeUrls);
  }
  getAppraiseData():Observable<appraise[]>{
    return this.http.get<appraise[]>(this.appraiseUrls);
  }

  getAchievements(): Observable<achievements[]> {
    debugger
    return this.http.get<achievements[]>(this.achievementUrls);
  }

  constructor(private http: HttpClient) { }

  getTimelines(): Observable<timelines[]> {
    return this.http.get<timelines[]>(this.timeUrls);
  }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, httpOptions);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, httpOptions);
  }
}