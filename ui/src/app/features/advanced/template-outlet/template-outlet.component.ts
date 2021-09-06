import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.css']
})
export class TemplateOutletComponent implements OnInit, AfterViewInit {

  @ViewChild('parentTemplate') myTemplate: TemplateRef<HTMLElement>;
  @ViewChild('cardTemplate') cardTemplate: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate: TemplateRef<HTMLElement>;
  isTrue = true;
  mode = "card"
  modeOptions = [
    { mode: "card" },
    { mode: "list" },
  ];
  items = [
    {
      header: 'Angular Tutorial',
      content: 'The Angular Tutorial for Beginners & Professionals'
    },
    {
      header: 'Typescript Tutorial',
      content: 'The Complete Guide to Typescript'
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    },
  ];
  get template() {

    if (this.mode == "list") return this.listTemplate
    return this.cardTemplate
  }

  constructor() { }

  ngAfterViewInit() {
    console.log(this.myTemplate)
    if (this.mode == "list") return this.listTemplate
    return this.cardTemplate
  }

  ngOnInit(): void {
  }

}
