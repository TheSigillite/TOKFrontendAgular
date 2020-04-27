import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './components/movielist/movielist.component';
import {EditmovieComponent} from './components/editmovie/editmovie.component';
import {AddmovieComponent} from './components/addmovie/addmovie.component';
import {MoviereviewsComponent} from './components/moviereviews/moviereviews.component';
import {RegisteruserComponent} from './components/registeruser/registeruser.component';

const routes: Routes = [
  {path: 'movies', component: MovielistComponent},
  {path: 'movies/edit', component: EditmovieComponent},
  {path: 'movies/new', component: AddmovieComponent},
  {path: 'movies/:id', component: MoviereviewsComponent},
  {path: 'register', component: RegisteruserComponent},
  {path: '', redirectTo: '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
