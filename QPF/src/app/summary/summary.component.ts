import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AchievementData } from '../achievementData';
import { SelfDevelopmentData } from '../selfDevelopmentData';
import { SkillDevelopmentData } from '../skillDevelopmentData';
import { RecruitmentData } from '../recruitmentData';
import { BrandBuildingData } from '../brandBuildingData';
import { OrganizationEventData } from '../organizationEventData';
import { AdditionalEffortsData } from '../additionalEffortsData';
import { AccomlishData } from '../accomplishData';
import { ImprovementData } from '../improvementData';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  achievementDataItemList: AchievementData[];
  selfDevelopmentDataItemList: SelfDevelopmentData[];
  skillDevelopmentDataItemList: SkillDevelopmentData[];
  recruitmentDataItemList: RecruitmentData[];
  brandBuildingDataItemList: BrandBuildingData[];
  organizationEventDataItemList: OrganizationEventData[];
  additionalEffortsDataItemList: AdditionalEffortsData[];
  accomplishDataItemList: AccomlishData[];
  improvementDataItemList: ImprovementData[];

  achievementTableHeader = ["Timeline", "My Achievement", "Summary", "Details", "Action"];
  selfDevelopmentTableHeader = ["Self Development", "Time Spent in Hours", "Details"];
  skillDevelopmentTableHeader = ["Skill Development", "Time Spent in hrs", "Details", "Actions"];
  recruitmentTableHeader = ["Recruitment Contribution", "Time Spent in hrs", "Details", "Actions"];
  brandBuildingTableHeader = ["Organization Brand Building", "Time Spent in hrs", "Details", "Actions"];
  eventsTableHeader = ["Organization Events", "Time Spent in hrs", "Details", "Actions"];
  additionalEffortsTableHeader = ["Timeline", "Hours", "Activity", "Details", "Actions"];
  improvementTableHeader = ["What Can be Improved", "Action Items for Improvements", "Actions"];
  accomplishmentTableHeader = ["What Went Well"];


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAchievementData();
    this.getSelfDevelopmentData();
    this.getSkillDevelopmentData();
    this.getBrandBuildingData();
    this.getOrganizationEventData();
    this.getAdditionalEffortsData();
    this.getAccomlishData();
    this.getImprovementData();
  }
  getAchievementData() {
    return this.customerService.getAchievementData().subscribe((response) => {
      this.achievementDataItemList = response
    });
  }

  getSelfDevelopmentData() {
    return this.customerService.getSelfDevelopmentData().subscribe((response) => {
      this.selfDevelopmentDataItemList = response
    });
  }

  getSkillDevelopmentData() {
    return this.customerService.getSkillDevelopmentData().subscribe((response) => {
      this.skillDevelopmentDataItemList = response
    });
  }

  getBrandBuildingData() {
    return this.customerService.getBrandBuildingData().subscribe((response) => {
      this.brandBuildingDataItemList = response
    });
  }

  getOrganizationEventData() {
    return this.customerService.getOrganizationEventData().subscribe((response) => {
      this.organizationEventDataItemList = response
    });
  }

  getAdditionalEffortsData() {
    return this.customerService.getAdditionalEffortsData().subscribe((response) => {
      this.additionalEffortsDataItemList = response
    });
  }

  getAccomlishData() {
    return this.customerService.getAccomlishData().subscribe((response) => {
      this.accomplishDataItemList = response
    });
  }

  getImprovementData() {
    return this.customerService.getImprovementData().subscribe((response) => {
      this.improvementDataItemList = response
    });
  }

}
