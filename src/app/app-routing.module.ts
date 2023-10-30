import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeriesComponent } from './series/series/series.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'series'},
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then(m => m.SeriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
