import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  subscription: Subscription;
  timerSubscription: Subscription;
  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    const broadcastBlog = interval(2000);
    const broadcastBlog1 = timer(2000, 5);
    this.subscription = broadcastBlog.subscribe(val => {
      console.log("val:", val)
      let message = "interval: " + val;
      this.printService.print(message, 'ulConatiner1');
      if (val > 5) {
        this.subscription.unsubscribe();
      }
    })
    this.timerSubscription = broadcastBlog1.subscribe(val => {
      console.log("val:", val)
      let message = "timer: " + val;
      this.printService.print(message, 'ulConatiner2');
      if (val > 5) {
        this.timerSubscription.unsubscribe();
      }
    })
  }

}
