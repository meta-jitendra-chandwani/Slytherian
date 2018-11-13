import { Component, OnInit } from '@angular/core';
import { Observable, Scheduler } from 'rxjs';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { SelectItem } from 'primeng/api'
import { timelines } from '../timelines';
@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  toggleNavigationBar: boolean = true;
  constructor(private customerService: CustomerService) {
  }


  ngOnInit() {

    // this.reloadData();
  }
  toggleNav() {
    this.toggleNavigationBar = !this.toggleNavigationBar;
  }
  reloadData() {
  }

}