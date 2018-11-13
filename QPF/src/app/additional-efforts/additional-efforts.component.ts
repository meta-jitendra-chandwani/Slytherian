import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { timelines } from '../timelines';

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

  constructor(private customerService: CustomerService) {
    this.fieldArray = [{}]
  }


  ngOnInit() {
    this.getTimeline();
    this.loader = false;
  }

  getTimeline() {
    return this.customerService.getTimelines().subscribe((response) => {
      this.timelinesItemList = response,
        console.log(this.timelinesItemList);
    });
  }

  // public transform(timelines: timelines[]): SelectItem[] {
  //   debugger
  //   if (!timelines) return undefined;
  //   return timelines.map(timeline => ({ label: timeline.timelinePeriod, value: timeline.timelinePeriod }));
  // }

  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log('ERROR: ' + error));
  }
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
