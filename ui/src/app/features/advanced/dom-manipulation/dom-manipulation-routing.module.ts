import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomLayoutComponent } from './dom-layout/dom-layout.component';
import { DomRenderComponent } from './dom-render/dom-render.component';

const routes: Routes = [
  {
    path: "", component: DomLayoutComponent, children: [
      { path: "render2", component: DomRenderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomManipulationRoutingModule { }
