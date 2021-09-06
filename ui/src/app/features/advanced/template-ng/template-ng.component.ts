import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-ng',
  templateUrl: './template-ng.component.html',
  styleUrls: ['./template-ng.component.css']
})
export class TemplateNgComponent implements OnInit, AfterViewInit {

  selected = false;
  num = 0
  @ViewChild('helloTemplate', { read: TemplateRef }) helloTemplate: TemplateRef<any>
  constructor(private vref: ViewContainerRef) { }
  ngAfterViewInit(): void {
    this.vref.createEmbeddedView(this.helloTemplate)
  }

  ngOnInit(): void {
  }

}
