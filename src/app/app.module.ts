import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadLinesComponent } from './head-lines/head-lines.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsTodayapiService } from './service/news-todayapi.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadLinesComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    EntertainmentNewsComponent,
    SportsNewsComponent,
    ShortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NewsTodayapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
