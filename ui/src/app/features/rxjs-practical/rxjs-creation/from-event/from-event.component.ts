import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;
  constructor(private printService: PrintService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let counbtVal = 'Click ' + count++;
      this.printService.print(counbtVal, "elContainer");
      this.printService.print(counbtVal, "elContainer2");
    })
  }

}
