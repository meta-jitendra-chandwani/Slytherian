import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { selfDevelopment } from '../selfDevelopment';

@Component({
  selector: 'app-self-development',
  templateUrl: './self-development.component.html',
  styleUrls: ['./self-development.component.css']
})
export class SelfDevelopmentComponent implements OnInit {

  selfDevelopmentItemList: any[];
  selectedDevelopment: selfDevelopment = null;
  fieldArray = [];

  customers: Observable<Customer[]>;

  tableHeader = ["Self Development", "Time Spent in Hours", "Details", ""];

  constructor(private customerService: CustomerService) {
    this.fieldArray = [{}]
  }

  ngOnInit() {
    this.getSelfDevelopment();
  }

  getSelfDevelopment() {
    return this.customerService.getSelfDevelopment().subscribe((response) => {
      this.selfDevelopmentItemList = response
        // console.log(this.selfDevelopmentItemList);

    });
  }


  addSelfDevelopedSkills() {
    let addNewTimelineObject = { value: null };
    this.fieldArray.push(addNewTimelineObject);
  }
  deleteSelfDevelopedSkills(data: any) {
    debugger
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }
}
