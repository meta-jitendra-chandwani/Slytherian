import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-review-summary',
  templateUrl: './review-summary.component.html',
  styleUrls: ['./review-summary.component.css']
})
export class ReviewSummaryComponent implements OnInit {
  summaryTableHeader=["Quarterly Performance","Description","Rating","Comments"];
  summaryData:any[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getReviewSummary();
  }
  getReviewSummary(): any {
    return this.customerService.getReviewSummary()
      .subscribe((response) => { this.summaryData = response });
  }

}
