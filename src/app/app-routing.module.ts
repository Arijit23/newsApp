import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadLinesComponent } from './head-lines/head-lines.component';

const routes: Routes = [
  {
    path:'',
    component:HeadLinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
