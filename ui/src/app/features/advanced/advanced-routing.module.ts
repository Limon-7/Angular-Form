import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { TemplateNgComponent } from './template-ng/template-ng.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
const domModule = () => import("./dom-manipulation/dom-manipulation.module").then(x => x.DomManipulationModule);
const routes: Routes = [
  {
    path: "", children: [
      { path: "content-projection", component: ContentProjectionComponent },
      { path: "templete-reference", component: TemplateReferenceComponent },
      { path: "ng-template", component: TemplateNgComponent },
      { path: "ng-template-outlet", component: TemplateOutletComponent },
      { path: "view-child", component: ViewChildComponent },
      { path: "view-children", component: ViewChildrenComponent },
      { path: "dom-manipulation", loadChildren: domModule },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }
