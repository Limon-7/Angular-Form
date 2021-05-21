import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, retryWhen, tap } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts().subscribe(val => {
      console.log(val);
    },
      err => {
        console.log(err);
      },
      () => {
        console.log("subscription complete");
      })
  }
  private getPosts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/post")
      .pipe(
        retry(2),
        // retryWhen(err => err.pipe(
        //   tap(() => console.log("retrying..."))
        // )),
        catchError(err => {
          return throwError("error occured");
        }));
  }
}
