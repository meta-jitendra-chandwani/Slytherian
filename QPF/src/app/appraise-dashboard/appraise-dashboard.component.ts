import { Component, OnInit } from '@angular/core';
import { appraise } from './appraise';
import { ActivatedRoute, Router } from '@angular/router';
import { AppraiseDashboardService } from './appraise-dashboard.service';
@Component({
  selector: 'app-appraise-dashboard',
  templateUrl: './appraise-dashboard.component.html',
  styleUrls: ['./appraise-dashboard.component.css']
})
export class AppraiseDashboardComponent implements OnInit {

  appraisesRows: appraise[] = [];
  loader: boolean = true;

  tableHeader = ["Years", "Quarter", "Status", "My Manager", "My Normalizer", "Publish Date", "Last Update Date"];

  constructor(private appraiseService: AppraiseDashboardService, private route: ActivatedRoute,
    private router: Router, ) {
  }


  ngOnInit() {
    this.getAppraise();
    this.loader = false;
  }

  getAppraise() {
    return this.appraiseService.getAppraiseData().subscribe((response) => {
      this.appraisesRows = response,
        console.log(this.appraisesRows);
    });
  }

  showAppraisePerformance(appraise: appraise) {
    debugger
    if (appraise.status === "Active") {
      this.router.navigate(['/performance']);
    }
    else if(appraise.status === "Completed"){
      this.router.navigate(['/summary']);
    }
  }
}

