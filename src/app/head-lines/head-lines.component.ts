import { Component, OnInit } from '@angular/core';
import {NewsTodayapiService} from '../service/news-todayapi.service';
@Component({
  selector: 'app-head-lines',
  templateUrl: './head-lines.component.html',
  styleUrls: ['./head-lines.component.css']
})
export class HeadLinesComponent implements OnInit {

  constructor(private api:NewsTodayapiService) { }
HeadlinesData:any=[]
  ngOnInit(): void {
this.api.NewsHeadLines().subscribe((result)=>
{
  console.log(result.articles);
  this.HeadlinesData = result.articles;
})
  }

}
