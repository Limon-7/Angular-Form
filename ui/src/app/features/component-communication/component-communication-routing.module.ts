import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildParentOutputComponent } from './child-parent-output/child-parent-output.component';
import { ChildParentViewchildComponent } from './child-parent-viewchild/child-parent-viewchild.component';
import { CommunicationServiceSubjectComponent } from './communication-service-subject/communication-service-subject.component';
import { ComponentCommunicationLayoutComponent } from './component-communication-layout/component-communication-layout.component';
import { InputLifecycleComponent } from './input-lifecycle/input-lifecycle.component';
import { NgzonesExampleComponent } from './ngzones-example/ngzones-example.component';
import { ParentChildInputComponent } from './parent-child-input/parent-child-input.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "", component: ComponentCommunicationLayoutComponent },
      { path: "parent-child/input", component: ParentChildInputComponent },
      { path: "input/chage-detection", component: InputLifecycleComponent },
      { path: "child-parent/viewchild", component: ChildParentViewchildComponent },
      { path: "child-parent/output", component: ChildParentOutputComponent },
      { path: "service/subject", component: CommunicationServiceSubjectComponent },

      { path: "ngzones", component: NgzonesExampleComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationRoutingModule { }
