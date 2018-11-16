import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/_service/shared.service';
import { AdditionalEffortsData } from '../../../shared/_model/additionalEffortsData';

@Component({
  selector: 'app-summary-additional-efforts',
  templateUrl: './summary-additional-efforts.component.html',
  styleUrls: ['./summary-additional-efforts.component.css']
})
export class SummaryAdditionalEffortsComponent implements OnInit {

  additionalEffortsDataItemList: AdditionalEffortsData[];
  additionalEffortsTableHeader = ["Timeline", "Hours", "Activity", "Details"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getAdditionalEffortsData();
  }

  getAdditionalEffortsData() {
    return this.sharedService.getAdditionalEffortsData().subscribe((response) => {
      this.additionalEffortsDataItemList = response
    });
  }

}
