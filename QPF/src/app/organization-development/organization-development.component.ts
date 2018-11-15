import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-organization-development',
  templateUrl: './organization-development.component.html',
  styleUrls: ['./organization-development.component.css']
})
export class OrganizationDevelopmentComponent implements OnInit {

 
  title = 'performance';
  constructor() {
   }

  ngOnInit() {
    // this.getSkillName();
  }
  
}
