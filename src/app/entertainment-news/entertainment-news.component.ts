import { Component, OnInit } from '@angular/core';
import {NewsTodayapiService} from '../service/news-todayapi.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  constructor(private api:NewsTodayapiService) { }

  EntertainmentNewsData:any=[]
  ngOnInit(): void {
    this.api.NewsEntertainment().subscribe((result)=>
{
  console.log(result.articles);
  this.EntertainmentNewsData = result.articles;
})
  }

}
