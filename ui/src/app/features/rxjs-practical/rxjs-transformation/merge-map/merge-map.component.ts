import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, from, fromEvent, interval, Observable, of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit, AfterViewInit {
  @ViewChild('btn1') btn1: ElementRef;
  clicks$: Observable<any>;
  count = 0
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
  constructor(private printService: PrintService, private http: HttpClient) { }

  ngOnInit(): void {
    //this.demo1()
    this.httpExample();
  }
  delayedObs(count: number) {
    return new Observable((observer) => {
      setTimeout(() => { observer.next(count + " A") }, 1000);
      setTimeout(() => { observer.next(count + " B") }, 2000);
      setTimeout(() => { observer.next(count + " C") }, 3000);
      setTimeout(() => { observer.next(count + " D") }, 4000);
      setTimeout(() => { observer.next(count + " E"); observer.complete() }, 5000);
    })
  }
  ngAfterViewInit(): void {
    this.clicks$ = fromEvent(this.btn1.nativeElement, 'click');
    //this.demo2();
    this.demo3();
  }
  demo3() {
    this.clicks$
      .pipe(
        mergeMap(() => {
          this.count = this.count + 1;
          return this.delayedObs(this.count)
        })
      )
      .subscribe(val => {
        console.log(val);
        this.printService.print(val, 'mergeMapConatiner1');
      });
  }
  demo2() {
    this.clicks$.pipe(
      mergeMap(val => {
        return interval(1000);
      })
    ).subscribe(val => {
      console.log("sub:", val)
      this.printService.print(val, 'mergeMapConatiner1');
    })
  }
  demo1() {
    let countries = from(this.country);
    let cities = from(this.city);
    countries
      .pipe(mergeMap(val => {
        console.log(val);
        return cities;
      }))
      .subscribe(val => {
        console.log('Country:', val);
      })
  }
  httpExample() {
    of("hound", "mastiff", "retriever")        //outer observable
      .pipe(
        mergeMap(breed => {
          const url1 = 'https://dog.ceo/api/breed/' + breed + '/list';
          const url2 = 'https://dog.ceo/api/breed/' + breed + '/images/random';

          let obs1 = this.http.get<any>(url1)
          let obs2 = this.http.get<any>(url2)
          // return obs1;// for single obserable
          return forkJoin(obs1, obs2)


        })
      )
      .subscribe(data => {
        console.log(data)
      })
  }
}
