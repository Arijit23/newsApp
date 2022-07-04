import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { HeadLinesComponent } from './head-lines/head-lines.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {
    path:'',
    component:HeadLinesComponent
  },
  {
    path:'tech',
    component:TechNewsComponent
  },
  {
    path:'business',
    component:BusinessNewsComponent
  },
  {
    path:'entertainment',
    component:EntertainmentNewsComponent
  },
  {
    path:'sports',
    component:SportsNewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
