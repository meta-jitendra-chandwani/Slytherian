import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-tab-view',
  templateUrl: './performance-tab-view.component.html',
  styleUrls: ['./performance-tab-view.component.css']
})
export class PerformanceTabViewComponent implements OnInit {
  tabValue: string = "Achievement";
  constructor() { }

  ngOnInit() {
  }
  tabSwitch(tabValue: string) {
    debugger
    this.tabValue = tabValue;
  }

}
