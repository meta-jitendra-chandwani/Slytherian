import { Component, OnInit } from '@angular/core';
import { SelfDevelopmentData } from '../../shared/_model/selfDevelopmentData';
import { SharedService } from '../../shared/_service/shared.service';

@Component({
  selector: 'app-summary-self-development',
  templateUrl: './summary-self-development.component.html',
  styleUrls: ['./summary-self-development.component.css']
})
export class SummarySelfDevelopmentComponent implements OnInit {

  selfDevelopmentDataItemList: SelfDevelopmentData[];

  selfDevelopmentTableHeader = ["Learnt something beyond the planned goals?", "Hours", "Details"];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getSelfDevelopmentData();
  }

  getSelfDevelopmentData() {
    return this.sharedService.getSelfDevelopmentData().subscribe((response) => {
      this.selfDevelopmentDataItemList = response
    });
  }

}
