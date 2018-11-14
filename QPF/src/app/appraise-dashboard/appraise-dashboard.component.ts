import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { appraise } from '../appraise';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-appraise-dashboard',
  templateUrl: './appraise-dashboard.component.html',
  styleUrls: ['./appraise-dashboard.component.css']
})
export class AppraiseDashboardComponent implements OnInit {

  fieldArray = [];
  loader: boolean = true;

  tableHeader = ["Years", "Quarter", "Status", "My Manager", "My Normalizer", "Publish Date", "Last Update Date"];

  constructor(private customerService: CustomerService, private route: ActivatedRoute,
    private router: Router, ) {
  }


  ngOnInit() {
    this.getAppraise();
    this.loader = false;
  }

  getAppraise() {
    return this.customerService.getAppraiseData().subscribe((response) => {
      this.fieldArray = response,
        console.log(this.fieldArray);
    });
  }

  addRow() {
    let addNewTimelineObject = { selectedTimeline: null }
    this.fieldArray.push(addNewTimelineObject);
  }
  deleteRow(data: any) {
    debugger
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }

  openQualityFeedbackForm(field: appraise) {
    debugger
    if (field.status === "Active") {
      this.router.navigate['/performance']
    }
  }
}

