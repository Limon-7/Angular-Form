import { Component, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  unsubscribe = new Subject();
  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    this.fromSrcArry();
    this.withFilter();
    this.convertSingleProperty();
  }
  fromSrcArry() {
    let srcArray = from([5, 6, 7, 8]);
    srcArray
      .pipe(
        map((val, i) => {
          return val * 10;
        }))
      .subscribe(val => {
        console.log("value:", val)
        this.printService.print(val, 'mapConatiner1')
      })
  }
  withFilter() {
    let srcArray = from([5, 6, 7, 8, 9, 10]);
    srcArray
      .pipe(
        tap((val) => console.log(val)),
        filter((val) => {
          return val % 2 == 0
        }),
        map((val, i) => {
          console.log(`${val} at index:${i}`)
          return val
        }))
      .subscribe(val => {
        console.log("val:", val);
        this.printService.print(val, 'mapConatiner2')
      })
  }
  convertSingleProperty() {
    let srcObject = from([
      { fName: 'Tareque', lName: "Hasna" },
      { fName: 'Limon', lName: "Malek" },
      { fName: 'Ramzan', lName: "Biplob" },
    ])
    //.pipe(map((val) => val.fName + " " + val.lName));

    srcObject
      .pipe(map((val) => val.fName + " " + val.lName))
      .subscribe((val) => {
        console.log(val);
        // let fullname = val.fName + val.lName;
        this.printService.print(val, 'mapConatiner3')
      });
  }
}
