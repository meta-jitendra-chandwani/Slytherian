import { Component, OnInit } from '@angular/core';
import { timelines } from '../shared/_model/timelines';
import { SharedService } from '../shared/_service/shared.service';

@Component({
  selector: 'app-additional-efforts',
  templateUrl: './additional-efforts.component.html',
  styleUrls: ['./additional-efforts.component.css']
})
export class AdditionalEffortsComponent implements OnInit {

  timelinesItemList: any[];
  timelines: timelines[];
  fieldArray = [];
  loader: boolean = true;

  tableHeader = ["Timeline", "Hours", "Activity", "Details", "Actions"];

  constructor(private sharedService: SharedService) {
    this.fieldArray = [{}]
  }


  ngOnInit() {
    this.getTimeline();
    this.loader = false;
  }

  getTimeline() {
    return this.sharedService.getTimelines().subscribe((response) => {
      this.timelinesItemList = response,
        console.log(this.timelinesItemList);
    });
  }

  // public transform(timelines: timelines[]): SelectItem[] {
  //   debugger
  //   if (!timelines) return undefined;
  //   return timelines.map(timeline => ({ label: timeline.timelinePeriod, value: timeline.timelinePeriod }));
  // }

  addAdditionalEfforts() {
    let addNewTimelineObject = { selectedTimeline: null }
    this.fieldArray.push(addNewTimelineObject);
  }
  deleteAdditionalEfforts(data: any) {
    debugger
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }
}
