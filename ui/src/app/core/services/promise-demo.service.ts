import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromiseDemoService implements Resolve<any> {
  allPosts: any = [];
  allComments: any = [];

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any | any> {
    return new Promise((resolve, reject) => {
      Promise.all([this.getAllPostsForPromise(), this.getAllCommentsForPromise()]).then(
        ([posts, comments]) => {
          console.log("posts-promise-all:", posts);
          console.log("comments-propmise-all:", comments);
          this.allPosts = posts ? posts : [];
          this.allComments = comments ? comments : [];
          resolve({ posts, comments });
        },
        reject
      );
    });
  }

  getTypeCodePost() {
    return new Promise((resolve, reject) => {
      let apiUrl = "https://jsonplaceholder.typicode.com/post";
      this.http.get(apiUrl).toPromise().then(data => {
        if (data) {
          console.log("resolve-data", data)
          return resolve(data);
        }
        else {
          return reject("rejected");
        }
      }).catch(err => { console.log(err) })
    })
  }
  getAllPosts(): any {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  getAllComments(): any {
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }

  private getAllPostsForPromise() {
    return new Promise((resolve, reject) => {
      this.getAllPosts().subscribe(data => {
        if (data) {
          return resolve(data);
        }
      }),
        reject;
    })
  }
  private getAllCommentsForPromise() {
    return new Promise((resolve, reject) => {
      this.getAllComments().subscribe(data => {
        if (data) {
          return resolve(data);
        }
      }),
        reject;
    })
  }
}
