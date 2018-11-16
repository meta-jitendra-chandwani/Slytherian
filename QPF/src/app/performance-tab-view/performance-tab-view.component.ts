import { Component, OnInit, ViewChild } from '@angular/core';
import { AchievementData } from '../shared/_model/achievementData';

@Component({
  selector: 'app-performance-tab-view',
  templateUrl: './performance-tab-view.component.html',
  styleUrls: ['./performance-tab-view.component.css']
})
export class PerformanceTabViewComponent implements OnInit {
  tabValue: string = "Achievement";
  @ViewChild(AchievementData)
  private achievement: AchievementData;
  constructor() { }

  ngOnInit() {
  }
  tabSwitch(tabValue: string) {
    debugger
    this.tabValue = tabValue;
  }
  saveDetails(){
    alert('dsggsdfgd');
  }
}
