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

  private timeUrls = 'http://localhost:3000/timelines';
  private appraiseUrls = 'http://localhost:3000/appraise';
  private achievementUrls = 'http://localhost:3000/achievements';
  private selfDevelopmentUrls = 'http://localhost:3000/selfDevelopment';
  private urlSkill = 'http://localhost:3000/skillData';
  private reviewSummaryUrl='http://localhost:3000/reviewSummary';

  constructor(private http: HttpClient) { }

  getSkillName(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.urlSkill);
  }
  getTimelines(): Observable<timelines[]> {
    return this.http.get<timelines[]>(this.timeUrls);
  }
  getAppraiseData(): Observable<appraise[]> {
    return this.http.get<appraise[]>(this.appraiseUrls);
  }
  getAchievements(): Observable<achievements[]> {
    return this.http.get<achievements[]>(this.achievementUrls);
  }
  getSelfDevelopment(): Observable<selfDevelopment[]> {
    return this.http.get<selfDevelopment[]>(this.selfDevelopmentUrls);
  }

  getReviewSummary():Observable<any[]>{
    return this.http.get<any[]>(this.reviewSummaryUrl);
  }
}