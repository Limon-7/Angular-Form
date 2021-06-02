import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrintService } from 'src/app/core/services/print.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private printService: PrintService) { }

  ngOnInit(): void {
    this.usingCreate().subscribe(val => {
      console.log("val:", val)
      this.printService.print(val, 'ulConatiner1')
    }, () => { },
      () => console.log("complete")
    )
    this.usingConstructor().subscribe(val => {
      console.log("val:", val)
      this.printService.print(val, 'ulConatiner2')
    },
      err => () => { },
      () => console.log('completed')
    )
  }
  usingCreate() {
    return Observable.create(v => {
      v.next('create-1');
      v.next('create-2');
      v.next('create-3');
      v.complete("completed")
    })
  }
  usingConstructor() {
    return new Observable(observer => {
      observer.next('constructor-1');
      observer.next('constructor-2');
      observer.next('constructor-3');
      observer.complete();
    })
  }

}
