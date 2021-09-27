import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentCommunicationRoutingModule } from './component-communication-routing.module';

import { ComponentCommunicationLayoutComponent } from './component-communication-layout/component-communication-layout.component';
import { ParentChildInputComponent } from './parent-child-input/parent-child-input.component';
import { ChildParentViewchildComponent } from './child-parent-viewchild/child-parent-viewchild.component';
import { ChildParentOutputComponent } from './child-parent-output/child-parent-output.component';
import { CommunicationServiceSubjectComponent } from './communication-service-subject/communication-service-subject.component';
import { NgzonesExampleComponent } from './ngzones-example/ngzones-example.component';
import { InputLifecycleComponent } from './input-lifecycle/input-lifecycle.component';
import { ParentChildSiblingsComponent } from './parent-child-input/parent-child-siblings/parent-child-siblings.component';


@NgModule({
  declarations: [
    ComponentCommunicationLayoutComponent,
    ParentChildInputComponent,
    ChildParentViewchildComponent,
    ChildParentOutputComponent,
    CommunicationServiceSubjectComponent,
    NgzonesExampleComponent,
    InputLifecycleComponent,
    ParentChildSiblingsComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRoutingModule
  ]
})
export class ComponentCommunicationModule { }
