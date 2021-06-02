import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCountService {

  userCount = new BehaviorSubject<any>(5);
  private userCountObserable$ = this.userCount.asObservable();
  constructor() { }

  setCount(count: number) {
    this.userCount.next(count);
  }
}
