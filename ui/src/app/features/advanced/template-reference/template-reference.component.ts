import { AfterContentInit, AfterViewChecked, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit, AfterContentInit, AfterViewChecked {

  @ViewChild(CustomerListComponent) cusomerList!: CustomerListComponent;
  constructor() { }

  ngOnInit(): void {
    console.log(`${this.cusomerList}`)
  }
  ngAfterContentInit(): void {
    console.log(`${this.cusomerList?.selectedCustomer?.name}`)
  }
  ngAfterViewChecked(): void {
    console.log(`${this.cusomerList?.selectedCustomer?.name}`)
  }
}
