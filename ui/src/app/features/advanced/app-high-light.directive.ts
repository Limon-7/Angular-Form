import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'highlight'
})
export class AppHighLightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('HighlightDirective initialized');
  } 
  highlight(color: string) {
     this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color); 
    }
  clear() { this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor'); }

}
