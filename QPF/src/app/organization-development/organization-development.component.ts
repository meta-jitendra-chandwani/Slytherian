import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-organization-development',
  templateUrl: './organization-development.component.html',
  styleUrls: ['./organization-development.component.css']
})
export class OrganizationDevelopmentComponent implements OnInit {

  skillTableHeader = ["Skill Development", "Time Spent in hrs", "Details", "Actions"];
  recruitmentTableHeader = ["Recruitment Contribution", "Time Spent in hrs", "Details", "Actions"];
  brandBuildingTableHeader = ["Organization Brand Building", "Time Spent in hrs", "Details", "Actions"];
  eventsTableHeader = ["Organization Events", "Time Spent in hrs", "Details", "Actions"];
  skillArray=[];
  recruitmentArray=[];
  brandBuildingArray=[];
  eventsArray=[];
  skills: Skill[];


  title = 'performance';
  constructor(private customerService: CustomerService) {
  
    this.skillArray=[{}];
    this.recruitmentArray=[{}];
    this.brandBuildingArray=[{}];
    this.eventsArray=[{}];

  }

  ngOnInit() {
    this.getSkillName();
  }
  getSkillName(): any {
    return this.customerService.getSkillName()
      .subscribe((skills) => { this.skills = skills });
  }
 

  addSkillRow()
  {
    this.skillArray.push(null);
  }
  addRecruitmentRow()
  {
    this.recruitmentArray.push(null);
  }
  addBrandBuildingRow()
  {
    this.brandBuildingArray.push(null);
  }
  addEventsRow()
  {
    this.eventsArray.push(null);
  }
  deleteSkillRow(data: any) {
    let index = this.skillArray.indexOf(data);
    if (index > -1) {
      this.skillArray.splice(index, 1);
    }
  }
  deleteRecruitmentRow(data: any) {
    let index = this.recruitmentArray.indexOf(data);
    if (index > -1) {
      this.recruitmentArray.splice(index, 1);
    }
  }
  deleteBrandBuildingRow(data: any) {
    let index = this.brandBuildingArray.indexOf(data);
    if (index > -1) {
      this.brandBuildingArray.splice(index, 1);
    }
  }
  deleteEventsRow(data: any) {
    let index = this.eventsArray.indexOf(data);
    if (index > -1) {
      this.eventsArray.splice(index, 1);
    }
  }

 

}
