import { Injectable } from '@angular/core';
import { timelines } from '../_model/timelines';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AchievementData } from '../_model/achievementData';
import { SelfDevelopmentData } from '../_model/selfDevelopmentData';
import { SkillDevelopmentData } from '../_model/skillDevelopmentData';
import { RecruitmentData } from '../_model/recruitmentData';
import { BrandBuildingData } from '../_model/brandBuildingData';
import { OrganizationEventData } from '../_model/organizationEventData';
import { AdditionalEffortsData } from '../_model/additionalEffortsData';
import { AccomlishData } from '../_model/accomplishData';
import { ImprovementData } from '../_model/improvementData';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private timeUrls = 'http://localhost:3000/timelines';

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
  
  getTimelines(): Observable<timelines[]> {
    return this.http.get<timelines[]>(this.timeUrls);
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
