import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ReviewSummaryService } from './review-summary.service';
import { ReviewSummary } from './reviewSummary';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.css']
})
export class ReviewSummaryComponent implements OnInit {
  summaryTableHeader=["Quarterly Performance","Description","Rating","Comments"];
  summaryData:ReviewSummary[];
  constructor(private reviewSummaryService: ReviewSummaryService) { }

  ngOnInit() {
    this.getReviewSummary();
  }
  getReviewSummary(): any {
    return this.reviewSummaryService.getReviewSummary()
      .subscribe((response) => { this.summaryData = response });
  }

}
