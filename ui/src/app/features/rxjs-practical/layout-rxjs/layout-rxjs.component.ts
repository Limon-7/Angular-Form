import { Component, OnInit } from '@angular/core';
import { UserCountService } from 'src/app/core/services/user-count.service';

@Component({
  selector: 'app-layout-rxjs',
  templateUrl: './layout-rxjs.component.html',
  styleUrls: ['./layout-rxjs.component.css']
})
export class LayoutRxjsComponent implements OnInit {

  user: number = 0;
  constructor(private userCountService: UserCountService) { }

  ngOnInit(): void {
    this.userCountService.userCount.subscribe(val => {
      console.log("rxjs:", val)
      // this.user = val + 1;
      // this.userCountService.setCount(this.user);
    })
  }


}
