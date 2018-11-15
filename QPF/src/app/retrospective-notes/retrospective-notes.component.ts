import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrospective-notes',
  templateUrl: './retrospective-notes.component.html',
  styleUrls: ['./retrospective-notes.component.css']
})
export class RetrospectiveNotesComponent implements OnInit {
  // fieldArray = [];
  // fieldImprovementArray = [];
  // tableImprovementHeader = ["What Can be Improved", "Action Items for Improvements", "Actions"];

  constructor() {
    // this.fieldArray = [{}];
    // this.fieldImprovementArray = [{}];
  }

  ngOnInit() {
  }

  // addRow() {
  //   this.fieldArray.push(null);
  // }
  // deleteRow(data: any) {
  //   let index = this.fieldArray.indexOf(data);
  //   if (index > -1) {
  //     this.fieldArray.splice(index, 1);
  //   }
  // }

  // addImprovementRow() {
  //   this.fieldImprovementArray.push(null);
  // }
  // deleteImprovementRow(data: any) {
  //   let index = this.fieldImprovementArray.indexOf(data);
  //   if (index > -1) {
  //     this.fieldImprovementArray.splice(index, 1);
  //   }
  // }
}