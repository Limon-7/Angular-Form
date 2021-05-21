import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsCombinationRoutingModule } from './rxjs-combination-routing.module';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ConcatConcatAllComponent } from './concat-concat-all/concat-concat-all.component';
import { MergeMergeallComponent } from './merge-mergeall/merge-mergeall.component';
import { CombineallCombineLatestComponent } from './combineall-combine-latest/combineall-combine-latest.component';


@NgModule({
  declarations: [
    ForkJoinComponent,
    ConcatConcatAllComponent,
    MergeMergeallComponent,
    CombineallCombineLatestComponent
  ],
  imports: [
    CommonModule,
    RxjsCombinationRoutingModule
  ]
})
export class RxjsCombinationModule { }
