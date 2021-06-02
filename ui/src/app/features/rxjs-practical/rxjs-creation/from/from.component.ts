import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    from(['limon', 'likhon', 'lama']).subscribe(val => {
      console.log(val);
      this.printService.print(val, 'fromUlContainer1');
    })
    from('limon').subscribe(val => {
      console.log(val);
      let value = "Charecter - " + val
      this.printService.print(value, 'fromUlContainer2');
    })
  }

}
