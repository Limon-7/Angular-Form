import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnChanges,OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  localMessage: any;
  @Input() message: string = "Default message";
  @ViewChild('localMessageRef') localMessageElement!: ElementRef;

  constructor() {
    console.log('%cConstructor: Component instance created', 'color: blue');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('%cngOnChanges: Input properties changed', 'color: orange', changes);
  }

  ngOnInit(): void {
    console.log('%cngOnInit: Component initialized', 'color: green');
  }
  ngDoCheck(): void {
    console.log('%cngDoCheck: Change detection run', 'color: purple');
  }
  ngAfterContentInit(): void {
    console.log('%cngAfterContentInit: Content projected into view', 'color: brown');
  }
  ngAfterContentChecked(): void {
    console.log('%cngAfterContentChecked: Projected content checked', 'color: darkred');
  }

  ngAfterViewInit(): void {
    console.log('%cngAfterViewInit: View and child views initialized', 'color: teal');
    // console.log('Accessed localMessage via ViewChild:', this.localMessageElement.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('%cngAfterViewChecked: View and child views checked', 'color: darkblue');
  }

  updateMessage() {
    this.localMessage = `Updated at ${new Date().toLocaleTimeString()}`;
    console.log('%cLocal Message Updated:', 'color: gray', this.localMessage);
  }
}
