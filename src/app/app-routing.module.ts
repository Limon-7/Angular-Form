import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const featuresModule = () => import("./features/features.module").then(x => x.FeaturesModule);
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "features", loadChildren: featuresModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
