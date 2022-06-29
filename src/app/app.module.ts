import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadLinesComponent } from './head-lines/head-lines.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsTodayapiService } from './service/news-todayapi.service'
@NgModule({
  declarations: [
    AppComponent,
    HeadLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewsTodayapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
