import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/_service/shared.service';
import { SkillDevelopmentData } from '../../../shared/_model/skillDevelopmentData';

@Component({
  selector: 'app-summary-skill-development',
  templateUrl: './summary-skill-development.component.html',
  styleUrls: ['./summary-skill-development.component.css']
})
export class SummarySkillDevelopmentComponent implements OnInit {

  skillDevelopmentDataItemList: SkillDevelopmentData[];

  skillDevelopmentTableHeader = ["What was the individulal's contribution towards skill development in the organization?", "Hours", "Details"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getSkillDevelopmentData();
  }

  getSkillDevelopmentData() {
    return this.sharedService.getSkillDevelopmentData().subscribe((response) => {
      this.skillDevelopmentDataItemList = response
    });
  }

}
