import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subject } from 'rxjs';
import { take, takeLast, takeUntil, takeWhile } from 'rxjs/operators';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-take-until-while-last',
  templateUrl: './take-until-while-last.component.html',
  styleUrls: ['./take-until-while-last.component.css']
})
export class TakeUntilWhileLastComponent implements OnInit {

  notifier = new Subject();
  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    // this.takeDemo();
    // this.takeLastDemo();
    // this.takeWhileDemo();
    this.takeUntilDemo();
  }
  takeDemo() {
    // let obs = of(1, 2, 3, 4, 5).pipe(take(2));
    let obs = from([1, 2, 3, 4, 5]).pipe(take(2));
    obs.subscribe(val => {
      console.log("take:", val);
      this.printService.print(val, 'takeConatiner')
    })
  }
  takeLastDemo() {
    // let obs = of(1, 2, 3, 4, 5).pipe(takeLast(2));
    let obs = from([1, 2, 3, 4, 5]).pipe(takeLast(2));
    obs.subscribe(val => {
      console.log("takeLast:", val);
      this.printService.print(val, 'takeLastConatiner')
    })
  }
  takeWhileDemo() {
    // let obs = of(1, 2, 3, 4, 5).pipe(takeLast(2));
    let obs = from([1, 2, 3, 4, 5]).pipe(takeWhile(val => val < 3, true));
    obs.subscribe(val => {
      console.log("takeWhile:", val);
      this.printService.print(val, 'takeWhileConatiner')
    })
  }
  takeUntilDemo() {
    let obs = interval(1000)
    //.pipe(takeUntil(this.notifier))
    obs
      .pipe(takeUntil(this.notifier))
      .subscribe(val => {
        console.log("takeUntill:", val);
        this.printService.print(val, 'takeUntillConatiner')
      })
  }
  destroyObservable() {
    this.notifier.next();
    this.notifier.complete();
  }
}
