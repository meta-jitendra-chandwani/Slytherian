import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.css']
})
export class ReviewSummaryComponent implements OnInit {
  summaryTableHeader=["Quarterly Performance","Description","Rating","Comments"];
  constructor() { }

  ngOnInit() {
  }

}
