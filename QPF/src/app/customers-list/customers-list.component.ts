import { Component, OnInit } from '@angular/core';
import { Observable, Scheduler } from 'rxjs';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { SelectItem } from 'primeng/api'
import { timelines } from '../timelines';
@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  timelinesItemList: any[] ;
  selectedTimeline: timelines = null;
  selectedValues: any;
  achievmentsList: SelectItem[];
  selectedAchievement: timelines = null;

  value: Date;
  dateValue: Date;
  minDateValue: Date;
  maxDateValue: Date;
  timelines: timelines[];
  fieldArray = [];
  customers: Observable<Customer[]>;

  tableHeader = ["Timeline", "Hours", "Activity", "Details", "Actions"];

  constructor(private customerService: CustomerService) {
    this.fieldArray = [{}]
  }
  show(value: string) {
    alert(value)
  }

  ngOnInit() {
    this.getTimeline();
    // this.reloadData();
  }

  getTimeline() {
    return this.customerService.getTimelines().subscribe((response) => {
      this.timelinesItemList = response,
      console.log(this.timelinesItemList);
      
      // this.transform(response);
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
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }
  handleClick() {
    //execute action
  }
  addRow() {
    let addNewTimelineObject = { selectedTimeline: null }
    // this.fieldArray.length++;
    this.fieldArray.push(addNewTimelineObject);
  }
  deleteRow(data: any) {
    debugger
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }
}