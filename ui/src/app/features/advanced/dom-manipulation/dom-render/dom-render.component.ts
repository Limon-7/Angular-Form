import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dom-render',
  templateUrl: './dom-render.component.html',
  styleUrls: ['./dom-render.component.css']
})
export class DomRenderComponent implements OnInit, AfterViewInit {
  @ViewChild("saySomeThing") saySomeThing: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    let doc = this.renderer.setProperty(this.saySomeThing, 'innerHTML', "");

    this.renderer.removeChild(this.saySomeThing, this.saySomeThing.nativeElement.children)
    console.log(this.saySomeThing.nativeElement.children)

  }

  ngOnInit(): void {
  }

}
