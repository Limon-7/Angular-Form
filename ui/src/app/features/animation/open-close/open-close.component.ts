import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('on', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('of', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('on <=> of', [
        animate('2s')
      ]),
      // transition('closed => open', [
      //   animate('0.5s')
      // ]),
    ]),
  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
