import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series/series.component';


@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    MatTableModule
  ]
})
export class SeriesModule { }
