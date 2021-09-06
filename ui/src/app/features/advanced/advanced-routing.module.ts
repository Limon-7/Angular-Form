import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DomRendererComponent } from './dom-renderer/dom-renderer.component';
import { TemplateNgComponent } from './template-ng/template-ng.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "content-projection", component: ContentProjectionComponent },
      { path: "component-communication", component: ComponentCommunicationComponent },
      { path: "templete-reference", component: TemplateReferenceComponent },
      { path: "ng-template", component: TemplateNgComponent },
      { path: "ng-template-outlet", component: TemplateOutletComponent },
      { path: "renderer2", component: DomRendererComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }
