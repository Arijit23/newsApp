import { Component, OnInit } from '@angular/core';
import {NewsTodayapiService} from '../service/news-todayapi.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private api:NewsTodayapiService) { }

  TechNewsData:any=[]
  ngOnInit(): void {
  this.api.NewsTech().subscribe((result)=>
{
  console.log(result.articles);
  this.TechNewsData = result.articles;
})
  }

}
