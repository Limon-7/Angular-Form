import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { MapComponent } from './map/map.component';
import { ScanComponent } from './scan/scan.component';
import { ReduceComponent } from './reduce/reduce.component';


@NgModule({
  declarations: [
    MergeMapComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    MapComponent,
    ScanComponent,
    ReduceComponent
  ],
  imports: [
    CommonModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
