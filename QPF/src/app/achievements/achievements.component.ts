import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerService } from '../customer.service';
import { timelines } from '../timelines';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  timelinesItemList: any[] ;
  selectedTimeline: timelines = null;
  selectedValues: any;
  achievementsList: any[];
  selectedAchievement: timelines = null;

  value: Date;
  dateValue: Date;
  minDateValue: Date;
  maxDateValue: Date;
  timelines: timelines[];
  fieldArray = [];

  tableHeader = ["Timeline", "My Achievement", "Summary", "Details", "Action"];

  constructor(private customerService: CustomerService) {
    this.fieldArray = [{}]
  }
  show(value: string) {
    alert(value)
  }

  ngOnInit() {
    this.getTimeline();
    this.getAchievements();
  }

  getTimeline() {
    return this.customerService.getTimelines().subscribe((response) => {
      this.timelinesItemList = response,
      console.log(this.timelinesItemList);
    });
  }

  getAchievements() {
    return this.customerService.getAchievements().subscribe((response) => {
      this.achievementsList = response,
      console.log(this.achievementsList);
    });
  }

  addAchievement() {
    let addNewTimelineObject = { selectedTimeline: null }
    this.fieldArray.push(addNewTimelineObject);
  }
  deleteAchievement(data: any) {
    debugger
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }

}