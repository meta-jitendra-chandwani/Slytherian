import { Component, OnInit } from '@angular/core';
import { BrandBuildingData } from '../../shared/_model/brandBuildingData';
import { SharedService } from 'src/app/shared/_service/shared.service';

@Component({
  selector: 'app-summary-organization-brand-building',
  templateUrl: './summary-organization-brand-building.component.html',
  styleUrls: ['./summary-organization-brand-building.component.css']
})
export class SummaryOrganizationBrandBuildingComponent implements OnInit {

  brandBuildingDataItemList: BrandBuildingData[];

  brandBuildingTableHeader = ["What was the individual's contribution towards organization brand building", "Hours", "Details"];

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.getBrandBuildingData();
  }

  getBrandBuildingData() {
    return this.sharedService.getBrandBuildingData().subscribe((response) => {
      this.brandBuildingDataItemList = response
    });
  }


}
