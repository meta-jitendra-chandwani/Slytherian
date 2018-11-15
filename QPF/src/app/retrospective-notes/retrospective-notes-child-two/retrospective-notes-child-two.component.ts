import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrospective-notes-child-two',
  templateUrl: './retrospective-notes-child-two.component.html',
  styleUrls: ['./retrospective-notes-child-two.component.css']
})
export class RetrospectiveNotesChildTwoComponent implements OnInit {

  fieldImprovementArray = [];
  tableImprovementHeader = ["What Can be Improved", "Action Items for Improvements", "Actions"];

  constructor() {
    this.fieldImprovementArray = [{}];
  }

  ngOnInit() {
  }

  addImprovementRow() {
    this.fieldImprovementArray.push(null);
  }
  deleteImprovementRow(data: any) {
    let index = this.fieldImprovementArray.indexOf(data);
    if (index > -1) {
      this.fieldImprovementArray.splice(index, 1);
    }
  }
}
