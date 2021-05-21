import { Component, OnInit } from '@angular/core';
import { PromiseDemoService } from 'src/app/core/services/promise-demo.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.css']
})
export class PromiseDemoComponent implements OnInit {

  allPosts: any = [];
  allComments: any = [];
  allComments2: any = [];
  allPosts2: any = [];
  constructor(private promiceService: PromiseDemoService, private activatedRoute: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.promiseAll().then(data => {
      console.log("data:", data['comments']);
      this.allComments2 = data['comments'];
      this.allPosts2 = data['posts'];
    });
    this.activatedRoute.data.subscribe((res) => {
      this.allPosts = res.posts.posts.slice(1, 5);
      this.allComments = res.posts.comments.slice(1, 5)
      console.log("allposts", this.allPosts)
      console.log("allComments", this.allComments)
    })
    console.log("this.allComments2", this.allComments2)
  }
  private promiseAll() {
    return new Promise((resolve, reject) => {
      Promise.all([this.getAllPosts(), this.getAllComments()]).then(
        ([posts, comments]) => {
          this.allPosts2 = posts ? posts : [];
          this.allComments2 = comments ? comments : [];
          resolve({ posts, comments });
        },
        reject
      );
    });
  }
  private getAllPosts() {
    return new Promise((resolve, reject) => {
      this.promiceService.getAllPosts().subscribe(data => {
        if (data) {
          return resolve(data);
        }
      }),
        reject;
    })
  }
  private getAllComments() {
    return new Promise((resolve, reject) => {
      this.promiceService.getAllComments().subscribe(data => {
        if (data) {
          return resolve(data);
        }
      }),
        reject;
    })
  }
}
