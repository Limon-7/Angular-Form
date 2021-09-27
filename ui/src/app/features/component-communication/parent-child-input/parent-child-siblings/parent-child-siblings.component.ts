import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-siblings',
  //inputs: ['count'],
  templateUrl: './parent-child-siblings.component.html',
  styleUrls: ['./parent-child-siblings.component.css']
})
export class ParentChildSiblingsComponent implements OnInit {
  // @Input('count') countt;
  private _count;
  @Input('count')
  set count(count: number) {
    this._count = count;
  }
  get count() {
    return this._count;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
