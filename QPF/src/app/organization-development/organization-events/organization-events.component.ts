import { Component, OnInit } from '@angular/core';
import { OrganizationEventsService } from './organization-events.service';
import { OrganizationEvent } from './organizationEvent';

@Component({
  selector: 'app-organization-events',
  templateUrl: './organization-events.component.html',
  styleUrls: ['./organization-events.component.css']
})
export class OrganizationEventsComponent implements OnInit {
  eventsArray=[];
  organizationEvent:OrganizationEvent[];
  eventsTableHeader = ["Organization Events", "Time Spent in hrs", "Details", "Actions"];
  constructor(private organizationEventsService:OrganizationEventsService) {
    this.eventsArray=[{}];
   }

  ngOnInit() {
    this.getEventName();
  }
  getEventName(): any {
    return this.organizationEventsService.getEventName()
      .subscribe((organizationEvent) => { this.organizationEvent = organizationEvent });
  }
 
}
