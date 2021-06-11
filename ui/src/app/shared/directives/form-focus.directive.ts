import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[focusInvalidInput]'
})
export class FormFocusDirective {

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  @HostListener('submit')
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if (invalidControl) {
      invalidControl.focus();
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
      if (document.getElementsByClassName('removeColor')) {
        document.getElementById('validateForm').classList.remove('removeColor');
      }
      document.getElementById('validateForm').classList.add('addColor');
    }
    else {
      document.getElementById('validateForm').classList.remove('addColor');
      document.getElementById('validateForm').classList.add('removeColor');
    }
  }


}
