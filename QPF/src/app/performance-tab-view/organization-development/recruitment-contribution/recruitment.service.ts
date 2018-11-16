import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Recruitment} from './recruitment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruitmentService {
  private urlRecruitment = 'http://localhost:3000/recruitmentDropDownData';
  constructor(private http: HttpClient) {
   }
  getRecruitmentName(): Observable<Recruitment[]> {
    return this.http.get<Recruitment[]>(this.urlRecruitment);
  }
 
}
