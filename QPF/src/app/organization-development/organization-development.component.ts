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
  fieldArray = [];
  skillArray=[];
  recruitmentArray=[];
  brandBuildingArray=[];
  eventsArray=[];
  skills: Skill[];


  title = 'performance';
  constructor(private customerService: CustomerService) {
    this.fieldArray = [{}];
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
  addRow() {
    let addNewTimelineObject = { selectedTimeline: null }

    this.fieldArray.push(addNewTimelineObject);
  }

  addSkillRow()
  {
    this.skillArray.push(null);
  }
  addRecruitmentRow()
  {
    this.recruitmentArray.push(null);
  }

  deleteRow(data: any) {
    debugger
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }

}
