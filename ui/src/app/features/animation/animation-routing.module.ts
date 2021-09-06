import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { TodosComponent } from './todos/todos.component';
import { ZippyComponent } from './zippy/zippy.component';

const routes: Routes = [
  {
    path: "", children: [
      { path: "open-close", component: OpenCloseComponent },
      { path: "todos", component: TodosComponent },
      { path: "zippy", component: ZippyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationRoutingModule { }
