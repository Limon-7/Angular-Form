import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplySubjectComponent } from './reply-subject/reply-subject.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "subject", component: SubjectComponent },
      { path: "behavior-subject", component: BehaviorSubjectComponent },
      { path: "async-subject", component: AsyncSubjectComponent },
      { path: "reply-subject", component: ReplySubjectComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsSubjectRoutingModule { }
