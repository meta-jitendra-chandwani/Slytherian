import { Component, OnInit } from '@angular/core';
import { RecruitmentData } from '../../shared/_model/recruitmentData';
import { SharedService } from 'src/app/shared/_service/shared.service';

@Component({
  selector: 'app-summary-recruitment',
  templateUrl: './summary-recruitment.component.html',
  styleUrls: ['./summary-recruitment.component.css']
})
export class SummaryRecruitmentComponent implements OnInit {

  recruitmentDataItemList: RecruitmentData[];

  recruitmentTableHeader = ["What was the individual's contribution towards recruitment process?", "Hours", "Details"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getRecruitmentData();
  }

  getRecruitmentData() {
    return this.sharedService.getOrganizationEventData().subscribe((response) => {
      this.recruitmentDataItemList = response
    });
  }

}
