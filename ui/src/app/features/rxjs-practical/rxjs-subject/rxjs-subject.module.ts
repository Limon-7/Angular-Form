import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSubjectRoutingModule } from './rxjs-subject-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { ReplySubjectComponent } from './reply-subject/reply-subject.component';


@NgModule({
  declarations: [
    SubjectComponent,
    BehaviorSubjectComponent,
    AsyncSubjectComponent,
    ReplySubjectComponent
  ],
  imports: [
    CommonModule,
    RxjsSubjectRoutingModule
  ]
})
export class RxjsSubjectModule { }
