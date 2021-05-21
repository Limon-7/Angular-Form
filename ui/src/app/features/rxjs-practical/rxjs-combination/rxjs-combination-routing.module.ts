import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineallCombineLatestComponent } from './combineall-combine-latest/combineall-combine-latest.component';
import { ConcatConcatAllComponent } from './concat-concat-all/concat-concat-all.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeMergeallComponent } from './merge-mergeall/merge-mergeall.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "combine", component: CombineallCombineLatestComponent },
      { path: "concate", component: ConcatConcatAllComponent },
      { path: "forkJoin", component: ForkJoinComponent },
      { path: "mergeAll", component: MergeMergeallComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsCombinationRoutingModule { }
