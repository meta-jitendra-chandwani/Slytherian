import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AchievementNames } from './_model/AchievementNames';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  private achievementUrls = 'http://localhost:3000/achievements';

  constructor(private http: HttpClient) { }
  getAchievements(): Observable<AchievementNames[]> {
    return this.http.get<AchievementNames[]>(this.achievementUrls);
  }
}
