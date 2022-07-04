import { Component, OnInit } from '@angular/core';
import {NewsTodayapiService} from '../service/news-todayapi.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {

  constructor(private api:NewsTodayapiService) { }

  SportsNewsData:any=[]
  ngOnInit(): void {
    this.api.NewsSports().subscribe((result)=>
{
  console.log(result.articles);
  this.SportsNewsData = result.articles;
})
  }

}
