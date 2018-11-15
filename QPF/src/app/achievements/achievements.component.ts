import { Component, OnInit } from '@angular/core';
import { timelines } from '../shared/_model/timelines';
import { AchievementsService } from './achievements.service';
import { SharedService } from '../shared/_service/shared.service';

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

  constructor(private achievementsService: AchievementsService, private sharedService: SharedService) {
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
    return this.sharedService.getTimelines().subscribe((response) => {
      this.timelinesItemList = response;
    });
  }

  getAchievements() {
    return this.achievementsService.getAchievements().subscribe((response) => {
      this.achievementsList = response;
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