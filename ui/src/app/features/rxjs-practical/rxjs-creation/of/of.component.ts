import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    of(['limon', 'likhon', 'lama']).subscribe(val => {
      console.log(val);
      this.printService.print(val, 'ofConatiner1');
    })
    of(1, 2, 3).subscribe(val => {
      console.log(val);
      let value = "user - " + val
      this.printService.print(value, 'ofConatiner2');
    })
  }

}
