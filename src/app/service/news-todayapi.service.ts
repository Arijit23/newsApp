import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsTodayapiService {

  constructor(private _http:HttpClient) { }

  HeadLinenews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f18ee6455cbc4a2eb1133a9a6f73d816';

  NewsHeadLines():Observable<any>
  {
    return this._http.get(this.HeadLinenews)
  }
}
