import { Component, OnInit } from '@angular/core';
import { ImprovementData } from '../../shared/_model/improvementData';
import { SharedService } from 'src/app/shared/_service/shared.service';

@Component({
  selector: 'app-summary-improvement',
  templateUrl: './summary-improvement.component.html',
  styleUrls: ['./summary-improvement.component.css']
})
export class SummaryImprovementComponent implements OnInit {

  improvementDataItemList: ImprovementData[];
  improvementTableHeader = ["What Can be Improved", "Action Items for Improvements"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getImprovementData();
  }

  getImprovementData() {
    return this.sharedService.getImprovementData().subscribe((response) => {
      this.improvementDataItemList = response
    });
  }

}
