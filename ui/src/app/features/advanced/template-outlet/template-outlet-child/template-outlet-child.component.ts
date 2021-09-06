import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-outlet-child',
  templateUrl: './template-outlet-child.component.html',
  styleUrls: ['./template-outlet-child.component.css']
})
export class TemplateOutletChildComponent implements OnInit {
  @Input() customTemplate: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

}
