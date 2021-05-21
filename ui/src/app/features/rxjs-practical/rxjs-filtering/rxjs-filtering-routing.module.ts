import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceDebounceTimeComponent } from './debounce-debounce-time/debounce-debounce-time.component';
import { FilterComponent } from './filter/filter.component';
import { FirstLastSingleComponent } from './first-last-single/first-last-single.component';
import { SkipWhileUntillLastComponent } from './skip-while-untill-last/skip-while-untill-last.component';
import { TakeUntilWhileLastComponent } from './take-until-while-last/take-until-while-last.component';

const routes: Routes = [
  {
    path: "", children:
      [
        { path: "filter", component: FilterComponent },
        { path: "take", component: TakeUntilWhileLastComponent },
        { path: "debounce", component: DebounceDebounceTimeComponent },
        { path: "skip", component: SkipWhileUntillLastComponent },
        { path: "first2last", component: FirstLastSingleComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsFilteringRoutingModule { }
