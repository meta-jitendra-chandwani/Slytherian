import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timelines } from './timelines';
import { appraise } from './appraise';
import { achievements } from './achievement-names';
import { selfDevelopment } from './selfDevelopment';
import { Skill } from './skill';
import { AchievementData } from './achievementData';
import { SelfDevelopmentData } from './selfDevelopmentData';
import { SkillDevelopmentData } from './skillDevelopmentData';
import { RecruitmentData } from './recruitmentData';
import { BrandBuildingData } from './brandBuildingData';
import { OrganizationEventData } from './organizationEventData';
import { AdditionalEffortsData } from './additionalEffortsData';
import { AccomlishData } from './accomplishData';
import { ImprovementData } from './improvementData';

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
  private reviewSummaryUrl = 'http://localhost:3000/reviewSummary';
  private achievementDataUrl = 'http://localhost:3000/achievementData';
  private selfDevelopmentDataUrl = 'http://localhost:3000/selfDevelopmentData';
  private skillDevelopmentDataUrl = 'http://localhost:3000/skillDevelopmentData';
  private recruitmentDataUrl = 'http://localhost:3000/recruitmentData';
  private brandBuildingDataUrl = 'http://localhost:3000/brandBuildingData';
  private organizationEventDataUrl = 'http://localhost:3000/organizationEventData';
  private additionalEffortsDataUrl = 'http://localhost:3000/additionalEffortsData';
  private accomplishDataUrl = 'http://localhost:3000/accomplishData';
  private improvementDataUrl = 'http://localhost:3000/improvementData';

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

  getReviewSummary(): Observable<any[]> {
    return this.http.get<any[]>(this.reviewSummaryUrl);
  }
  getAchievementData(): Observable<AchievementData[]> {
    return this.http.get<AchievementData[]>(this.achievementDataUrl);
  }
  getSkillDevelopmentData(): Observable<SkillDevelopmentData[]> {
    return this.http.get<SkillDevelopmentData[]>(this.skillDevelopmentDataUrl);
  }
  getSelfDevelopmentData(): Observable<SelfDevelopmentData[]> {
    return this.http.get<SelfDevelopmentData[]>(this.selfDevelopmentDataUrl);
  }
  getRecruitmentData(): Observable<RecruitmentData[]> {
    return this.http.get<RecruitmentData[]>(this.recruitmentDataUrl);
  }
  getBrandBuildingData(): Observable<BrandBuildingData[]> {
    return this.http.get<BrandBuildingData[]>(this.brandBuildingDataUrl);
  }
  getOrganizationEventData(): Observable<OrganizationEventData[]> {
    return this.http.get<OrganizationEventData[]>(this.organizationEventDataUrl);
  }
  getAdditionalEffortsData(): Observable<AdditionalEffortsData[]> {
    return this.http.get<AdditionalEffortsData[]>(this.additionalEffortsDataUrl);
  }
  getAccomlishData(): Observable<AccomlishData[]> {
    return this.http.get<AccomlishData[]>(this.accomplishDataUrl);
  }
  getImprovementData(): Observable<ImprovementData[]> {
    return this.http.get<ImprovementData[]>(this.improvementDataUrl);
  }

}