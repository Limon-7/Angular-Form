import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  exportAs:"clickDirective"
})
export class ClickOutsideDirective {

  @Input() targetId:string;
  @Output() clickOutside = new EventEmitter<void>();
  constructor(private elementRef: ElementRef, private render2:Renderer2) { 
  }

  @HostListener('document:click', ['$event.target']) 
  onClick(targetElement: HTMLElement): void {

    const innerWidth=  window.innerWidth
    const navbar = document.getElementById(this.targetId);
    const nativeElement= this.elementRef.nativeElement;
    // console.log(navbar)
    // console.log(nativeElement)
    const toggler = targetElement.closest('.navbar-toggler');
    const clickedInsideNavbar = navbar?.contains(targetElement);
    const isClickedInsideNavbar = this.elementRef.nativeElement.contains(targetElement);
    // console.log(clickedInsideNavbar)
    // console.log(isClickedInsideNavbar)

    // this will handle main navbar toggle
    if (!clickedInsideNavbar && !toggler) {
      this.render2.removeClass(navbar, "show");
    }
    // this will handle main navbar toggle if link is clicked
    if (clickedInsideNavbar && !toggler && targetElement.tagName === 'A' && targetElement.getAttribute('role') != 'button') {
      this.render2.removeClass(navbar, 'show');
    }    
  }
}
