import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }

}
