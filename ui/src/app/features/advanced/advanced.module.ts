import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CustomerListComponent } from './template-reference/customer-list/customer-list.component';
import { TemplateNgComponent } from './template-ng/template-ng.component';
import { TtfDirective } from './template-ng/ttf.directive';
import { FormsModule } from '@angular/forms';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { TemplateOutletChildComponent } from './template-outlet/template-outlet-child/template-outlet-child.component';
import { ListItemComponent } from './template-outlet/list-item/list-item.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ChildComponent } from './view-child/child/child.component';
import { AppHighLightDirective } from './app-high-light.directive';



@NgModule({
  declarations: [
    TemplateReferenceComponent,
    ContentProjectionComponent,
    CustomerListComponent,
    TemplateNgComponent,
    TtfDirective,
    TemplateOutletComponent,
    TemplateOutletChildComponent,
    ListItemComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    ChildComponent,
    AppHighLightDirective
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    FormsModule
  ]
})
export class AdvancedModule { }
