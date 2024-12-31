import { Component, OnChanges, OnInit } from '@angular/core';
import { UserCountService } from 'src/app/core/services/user-count.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private userCountService: UserCountService) { }
  user = 0;
  ngOnInit(): void {
    this.userCountService.userCount.subscribe(val => {
      // console.log("val:", val)
      this.user = val
    })
  }



}
