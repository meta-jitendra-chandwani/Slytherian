import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timelines } from './timelines';
import { appraise } from './appraise';
import { achievements } from './achievement-names';
import { selfDevelopment } from './selfDevelopment';
import { Skill } from './skill';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';
  private timeUrls = 'http://localhost:3000/timelines';
  private appraiseUrls = 'http://localhost:3000/appraise';
  private achievementUrls = 'http://localhost:3000/achievements';
  private selfDevelopmentUrls = 'http://localhost:3000/selfDevelopment';
  private urlSkill = 'http://localhost:3000/skillData';

  constructor(private http: HttpClient) { }

  getSkillName(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.urlSkill);
  }
  getTimelines(): Observable<timelines[]> {
    debugger
    return this.http.get<timelines[]>(this.timeUrls);
  }
  getAppraiseData(): Observable<appraise[]> {
    return this.http.get<appraise[]>(this.appraiseUrls);
  }

  getAchievements(): Observable<achievements[]> {
    debugger
    return this.http.get<achievements[]>(this.achievementUrls);
  }
  getSelfDevelopment(): Observable<selfDevelopment[]> {
    return this.http.get<selfDevelopment[]>(this.selfDevelopmentUrls);
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