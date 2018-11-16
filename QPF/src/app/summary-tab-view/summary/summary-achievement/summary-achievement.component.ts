import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/_service/shared.service';
import { AchievementData } from '../../../shared/_model/achievementData';

@Component({
  selector: 'app-summary-achievement',
  templateUrl: './summary-achievement.component.html',
  styleUrls: ['./summary-achievement.component.css']
})
export class SummaryAchievementComponent implements OnInit {

  achievementDataItemList: AchievementData[];

  achievementTableHeader = ["Timeline", "My Achievement", "Summary", "Details"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getAchievementData();
  }

  getAchievementData() {
    return this.sharedService.getAchievementData().subscribe((response) => {
      this.achievementDataItemList = response
    });
  }
}
