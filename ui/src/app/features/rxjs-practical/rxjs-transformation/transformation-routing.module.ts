import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { MapComponent } from './map/map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ScanComponent } from './scan/scan.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "concatMap", component: ConcatMapComponent },
      { path: "exhaustMap", component: ExhaustMapComponent },
      { path: "mergeMap", component: MergeMapComponent },
      { path: "switchMap", component: SwitchMapComponent },
      { path: "map", component: MapComponent },
      { path: "scan", component: ScanComponent },
      { path: "reduce", component: ReduceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationRoutingModule { }
