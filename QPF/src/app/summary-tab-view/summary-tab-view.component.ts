import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-tab-view',
  templateUrl: './summary-tab-view.component.html',
  styleUrls: ['./summary-tab-view.component.css']
})
export class SummaryTabViewComponent implements OnInit {

  tabValue: string = "Summary";
  constructor() { }

  ngOnInit() {
  }
  tabSwitch(tabValue: string) {
    this.tabValue = tabValue;
  }
}
