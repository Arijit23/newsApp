import { Component, OnInit } from '@angular/core';
import {NewsTodayapiService} from '../service/news-todayapi.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private api:NewsTodayapiService) { }

  BusinessNewsData:any=[]
  ngOnInit(): void {
    this.api.NewsBusiness().subscribe((result)=>
{
  console.log(result.articles);
  this.BusinessNewsData = result.articles;
})
  }

}
