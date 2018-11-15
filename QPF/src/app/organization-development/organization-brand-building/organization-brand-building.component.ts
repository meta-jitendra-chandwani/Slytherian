import { Component, OnInit } from '@angular/core';
import { OrganizationBrandBuildingService } from './organization-brand-building.service';
import { BrandBuilding } from './brandBuilding';

@Component({
  selector: 'app-organization-brand-building',
  templateUrl: './organization-brand-building.component.html',
  styleUrls: ['./organization-brand-building.component.css']
})
export class OrganizationBrandBuildingComponent implements OnInit {
  brandBuildingArray=[];
  brandBuilding:BrandBuilding[];
  brandBuildingTableHeader = ["Organization Brand Building", "Time Spent in hrs", "Details", "Actions"];
  constructor(private organizationBrandBuildingService:OrganizationBrandBuildingService) { 
    this.brandBuildingArray=[{}];
  }
  
  ngOnInit() {
   this.getBrandBuildingName();
  }
  
  getBrandBuildingName(): any {
    return this.organizationBrandBuildingService.getBrandBuildingName()
      .subscribe((brandBuilding) => { this.brandBuilding = brandBuilding });
  }
  addBrandBuildingRow()
  {
    this.brandBuildingArray.push(null);
  }
  deleteBrandBuildingRow(data: any) {
    let index = this.brandBuildingArray.indexOf(data);
    if (index > -1) {
      this.brandBuildingArray.splice(index, 1);
    }
  }

}
