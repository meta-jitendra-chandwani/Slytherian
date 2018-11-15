import { Component, OnInit } from '@angular/core';
import { AccomlishData } from '../../shared/_model/accomplishData';
import { SharedService } from 'src/app/shared/_service/shared.service';

@Component({
  selector: 'app-summary-accomplishment',
  templateUrl: './summary-accomplishment.component.html',
  styleUrls: ['./summary-accomplishment.component.css']
})
export class SummaryAccomplishmentComponent implements OnInit {

  accomplishDataItemList: AccomlishData[];

  accomplishmentTableHeader = ["What Went Well"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getAccomlishData();
  }
  
  getAccomlishData() {
    return this.sharedService.getAccomlishData().subscribe((response) => {
      this.accomplishDataItemList = response
    });
  }

}
