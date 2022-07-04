import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsTodayapiService {

  constructor(private _http:HttpClient) { }

  HeadLinenews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f18ee6455cbc4a2eb1133a9a6f73d816';

  TechNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f18ee6455cbc4a2eb1133a9a6f73d816';

  BusinessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f18ee6455cbc4a2eb1133a9a6f73d816';

  EntertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f18ee6455cbc4a2eb1133a9a6f73d816';

  SportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=f18ee6455cbc4a2eb1133a9a6f73d816';

  NewsHeadLines():Observable<any>
  {
    return this._http.get(this.HeadLinenews)
  }
  NewsTech():Observable<any>
  {
    return this._http.get(this.TechNews)
  }
  NewsBusiness():Observable<any>
  {
    return this._http.get(this.BusinessNews)
  }
  NewsEntertainment():Observable<any>
  {
    return this._http.get(this.EntertainmentNews)
  }
  NewsSports():Observable<any>
  {
    return this._http.get(this.SportsNews)
  }
}
