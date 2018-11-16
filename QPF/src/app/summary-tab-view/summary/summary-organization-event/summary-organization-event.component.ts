import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/_service/shared.service';
import { OrganizationEventData } from '../../../shared/_model/organizationEventData';

@Component({
  selector: 'app-summary-organization-event',
  templateUrl: './summary-organization-event.component.html',
  styleUrls: ['./summary-organization-event.component.css']
})
export class SummaryOrganizationEventComponent implements OnInit {

  organizationEventDataItemList: OrganizationEventData[];

  eventsTableHeader = ["What was the individual's contribution towards organization of events", "Hours", "Details"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getOrganizationEventData();
  }

  getOrganizationEventData() {
    return this.sharedService.getOrganizationEventData().subscribe((response) => {
      this.organizationEventDataItemList = response
    });
  }

}
