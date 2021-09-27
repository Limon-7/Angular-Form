import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent, { static: true }) child: ChildComponent
  @ViewChild('heading') head: ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.head.nativeElement.innerHTML);
    this.head.nativeElement.innerHTML = "View Child Example";
  }
  increment() {
    this.child.increment();
  }
  decrement() {
    this.child.decrement();
  }
}
