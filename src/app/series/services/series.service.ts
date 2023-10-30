import { Injectable } from '@angular/core';
import { Serie } from '../models/serie';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private httpClient:HttpClient) {
    this.httpClient
    .get<Serie[]>("https://api.tvmaze.com/shows").forEach(data => console.log("THIS"+data))
  }

  list():Observable<Serie[]>{

    return this.httpClient
    .get<Serie[]>("https://api.tvmaze.com/shows")





    console.log("HERE")
    return this.httpClient.get<Serie[]>("https://api.tvmaze.com/shows/5");
    //return [
      //{nome:'Arrow',descricao:'SerieIncrivel'},
     // {nome:'Arrow',descricao:'SerieIncrivel'}
    //;
  }
}
