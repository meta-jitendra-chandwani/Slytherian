import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Observable } from 'rxjs';
import { selfDevelopment } from './selfDevelopment';
import { SelfDevelopmentService } from './self-development.service';

@Component({
  selector: 'app-self-development',
  templateUrl: './self-development.component.html',
  styleUrls: ['./self-development.component.css']
})
export class SelfDevelopmentComponent implements OnInit {

  selfDevelopmentItemList: selfDevelopment[];
  selectedDevelopment: selfDevelopment = null;
  fieldArray = [];

  customers: Observable<Customer[]>;

  tableHeader = ["Self Development", "Time Spent in Hours", "Details", "Actions"];

  constructor(private selfDevelopment: SelfDevelopmentService) {
    this.fieldArray = [{}]
  }

  ngOnInit() {
    this.getSelfDevelopment();
  }

  getSelfDevelopment() {
    return this.selfDevelopment.getSelfDevelopment().subscribe((response) => {
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
