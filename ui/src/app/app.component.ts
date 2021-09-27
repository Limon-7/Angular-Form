import { fromEvent, merge, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practical-angular-core';
  isConnection: boolean;
  constructor(private toaster: ToastrService) {
    this.createOnline$().subscribe(isonline => {
      this.isConnection = isonline;
      console.log("isonline:", isonline)
    })
  }
  ngOnInit() {

  }
  notify() {
    this.toaster.success('hello');
  }
  createOnline$() {
    return merge<boolean>(
      fromEvent(window, "offline").pipe(map(() => false)),
      fromEvent(window, "online").pipe(map(() => true)),
      new Observable((sub) => {
        console.log("sub:", sub);
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
}
