import { Component, OnInit } from '@angular/core';
import { RecruitmentService } from './recruitment.service';
import {Recruitment} from './recruitment';

@Component({
  selector: 'app-recruitment-contribution',
  templateUrl: './recruitment-contribution.component.html',
  styleUrls: ['./recruitment-contribution.component.css']
})
export class RecruitmentContributionComponent implements OnInit {
  recruitmentArray=[];
  recruitments:Recruitment[];
  recruitmentTableHeader = ["Recruitment Contribution", "Time Spent in hrs", "Details", "Actions"];
  constructor(private recruitmentService:RecruitmentService) {
    this.recruitmentArray=[{}];
   }

  ngOnInit() {
    this.getRecruitmentName();
  }
  getRecruitmentName(): any {
    return this.recruitmentService.getRecruitmentName()
      .subscribe((recruitments) => { this.recruitments = recruitments });
  }
  addRecruitmentRow()
  {
    this.recruitmentArray.push(null);
  }
  deleteRecruitmentRow(data: any) {
    let index = this.recruitmentArray.indexOf(data);
    if (index > -1) {
      this.recruitmentArray.splice(index, 1);
    }
  }
}
