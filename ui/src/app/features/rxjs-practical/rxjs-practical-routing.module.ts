import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseDemoService } from 'src/app/core/services/promise-demo.service';
import { LayoutRxjsComponent } from './layout-rxjs/layout-rxjs.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { RxjsDashboardComponent } from './rxjs-dashboard/rxjs-dashboard.component';

const errorHandlingModule = () => import("./rxjs-error-handling/error-handling.module").then(x => x.ErrorHandlingModule);
const creationModule = () => import("./rxjs-creation/rxjs-creation.module").then(x => x.RxjsCreationModule);
const combinationModule = () => import("./rxjs-combination/rxjs-combination.module").then(x => x.RxjsCombinationModule);
const filteringModule = () => import("./rxjs-filtering/rxjs-filtering.module").then(x => x.RxjsFilteringModule);
const transformationModule = () => import("./rxjs-transformation/transformation.module").then(x => x.TransformationModule);
const utilityModule = () => import("./rxjs-utility/rxjs-utility.module").then(x => x.RxjsUtilityModule);
const subjectModule = () => import("./rxjs-subject/rxjs-subject.module").then(x => x.RxjsSubjectModule);
const routes: Routes = [
  {
    path: "", component: LayoutRxjsComponent,
    children:
      [
        { path: "dashboard", component: RxjsDashboardComponent },
        { path: "promise", component: PromiseDemoComponent, resolve: { posts: PromiseDemoService } },
        { path: "combination", loadChildren: combinationModule },
        { path: "c", loadChildren: creationModule },
        { path: "error", loadChildren: errorHandlingModule },
        { path: "f", loadChildren: filteringModule },
        { path: "t", loadChildren: transformationModule },
        { path: "u", loadChildren: utilityModule },
        { path: "s", loadChildren: subjectModule },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsPracticalRoutingModule { }
