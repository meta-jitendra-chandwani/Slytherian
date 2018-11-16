import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrospective-notes-child-one',
  templateUrl: './retrospective-notes-child-one.component.html',
  styleUrls: ['./retrospective-notes-child-one.component.css']
})
export class RetrospectiveNotesChildOneComponent implements OnInit {

  fieldArray = [];

  constructor() {
    this.fieldArray = [{}];
  }

  ngOnInit() {
  }

  addRow() {
    this.fieldArray.push(null);
  }
  deleteRow(data: any) {
    let index = this.fieldArray.indexOf(data);
    if (index > -1) {
      this.fieldArray.splice(index, 1);
    }
  }
}
