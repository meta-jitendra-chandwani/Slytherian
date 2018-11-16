import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {OrganizationEvent} from './organizationEvent';

@Injectable({
  providedIn: 'root'
})
export class OrganizationEventsService {
private eventsDropDownDataUrl='http://localhost:3000/eventsDropDownData'
  constructor(private http: HttpClient) {

   }
   getEventName(): Observable<OrganizationEvent[]> {
    return this.http.get<OrganizationEvent[]>(this.eventsDropDownDataUrl);
  }
}
