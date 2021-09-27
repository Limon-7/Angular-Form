import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-input',
  templateUrl: './parent-child-input.component.html',
  styleUrls: ['./parent-child-input.component.css']
})
export class ParentChildInputComponent implements OnInit {

  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  increment() {
    this.count++;
  }
}
