import { Component, OnInit } from '@angular/core';
import Customer from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  exportAs: 'customerList'
})
export class CustomerListComponent implements OnInit {

  selectedCustomer: Customer;

  customers: Customer[] = [

    { customerNo: 1, name: 'Rahuld Dravid', address: 'Bangladesh', city: 'Banglaore', state: 'Karnataka', country: 'India' },
    { customerNo: 2, name: 'Sachin Tendulkar', address: 'Bangladesh', city: 'Mumbai', state: 'Maharastra', country: 'India' },
    { customerNo: 3, name: 'Saurrav Ganguly', address: 'Bangladesh', city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { customerNo: 4, name: 'Mahendra Singh Dhoni', address: 'Bangladesh', city: 'Ranchi', state: 'Bihar', country: 'India' },
    { customerNo: 5, name: 'Virat Kohli', address: 'Bangladesh', city: 'Delhi', state: 'Delhi', country: 'India' },

  ]
  constructor() { }

  ngOnInit(): void {
  }


}
