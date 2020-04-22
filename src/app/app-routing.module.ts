import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './components/movielist/movielist.component';
import {EditmovieComponent} from './components/editmovie/editmovie.component';

const routes: Routes = [
  {path: 'movies', component: MovielistComponent},
  {path: 'movies/new', component: EditmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
