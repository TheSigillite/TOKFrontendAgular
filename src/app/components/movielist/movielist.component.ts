import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  public movies$: any;
  isAdmin: any;
  constructor(private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.isAdmin = JSON.parse(localStorage.getItem('ismod'));
    console.log(this.isAdmin);
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAll().subscribe(response =>{
      this.movies$ = response;
    });
  }

  deletemovie( movieid: number ){
    console.log('delete movie no' + movieid);
    this.movieService.deleteMovie(
      {login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      movie_id: movieid}).subscribe(response => {
        console.log(response);
    });
  }
}
