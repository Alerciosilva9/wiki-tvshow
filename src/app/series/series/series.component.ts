import { Component, OnInit } from '@angular/core';
import { Serie } from '../models/serie';
import { SeriesService } from '../services/series.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit{
    series: Observable<Serie[]>;
    displayedColumns = ['image','name','summary']
    constructor(private service:SeriesService){
      this.series = this.service.list()
    }
  ngOnInit(): void {

  }
}
