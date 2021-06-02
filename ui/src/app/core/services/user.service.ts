import { debounceTime, filter, map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = [
    { id: 1, username: 'limon' },
    { id: 2, username: 'likhon' },
    { id: 3, username: 'malek' },
    { id: 4, username: 'sarker' },
  ]
  constructor(private http: HttpClient) { }

  getUser(userName: any): Observable<any> {
    return from(this.user).pipe(filter(x => x.username == userName));
  }
}
