import { Component, OnInit, Input } from '@angular/core';
import { AchievementsService } from './achievements.service';
import { timelines } from '../../shared/_model/timelines';
import { SharedService } from '../../shared/_service/shared.service';
import { AchievementData } from '../../shared/_model/achievementData';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  @Input() achievement = new AchievementData();

  timelinesItemList: any[];
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
  getAchieve(){
    return this.achievement;
  }
}