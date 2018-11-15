import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Skill} from './skill';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private urlSkill = 'http://localhost:3000/skillData';
  constructor(private http: HttpClient) { }
  getSkillName(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.urlSkill);
  }
}
