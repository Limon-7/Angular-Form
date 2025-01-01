import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // @Output() closeMenu = new EventEmitter<void>(); 
  isMenuOpen = true; 
  toggleMenu(): void { 
    this.isMenuOpen = !this.isMenuOpen; 
  } 

  onClickOutside(): void {
     this.isMenuOpen = false;
     console.log(this.isMenuOpen)
    //  this.closeMenu.emit(); 
  }
}
