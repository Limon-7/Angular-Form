import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
import { FileDetector } from 'selenium-webdriver';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  @ViewChild('btn1') btn1: ElementRef;
  clicks$: Observable<any>;

  country = [
    { id: 1, name: 'Bangladesh' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Spain' },
    { id: 4, name: 'UK' },
    { id: 5, name: 'Canada' }
  ]
  city = [
    { id: 1, name: "Dhaka", countryId: 1 },
    { id: 2, name: "Uttara", countryId: 1 },
    { id: 3, name: "Dhanmondi", countryId: 1 },
    { id: 4, name: "New York", countryId: 2 },
    { id: 5, name: "Los Angles", countryId: 2 },
    { id: 6, name: "Torronto", countryId: 5 },
    { id: 7, name: "Victoria", countryId: 5 },
    { id: 8, name: "British Columnbia", countryId: 5 },
  ]
  notifier: Subject<any>;

  constructor(private printService: PrintService) {
    this.notifier = new Subject();
  }

  ngOnInit(): void {
    this.demo1();
  }
  ngAfterViewInit(): void {
    this.clicks$ = fromEvent(this.btn1.nativeElement, 'click');
    this.demo2();
  }

  demo1() {
    let countries = from(this.country);
    let cities = from(this.city);
    countries
      .pipe(switchMap(val => {
        console.log(val);
        return cities;
      }))
      .subscribe(val => {
        console.log('Country:', val);
      })
  }
  demo2() {
    this.clicks$.pipe(
      switchMap(val => {
        return interval(500);
      }),
      takeUntil(this.notifier)
    ).subscribe(val => {
      console.log("sub:", val)
      this.printService.print(val, 'switchMapConatiner1');
    })
  }
  destroy() {
    this.notifier.next();
    this.notifier.complete();
  }
}
