import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../../services/movieservice.service';
import { Router } from '@angular/router';
import { StorageserviceService } from '../../services/storageservice.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  public movies$: any;
  isAdmin: any;
  constructor(private movieService: MovieserviceService, private route: Router, private storage: StorageserviceService) { }

  ngOnInit(): void {
    this.isAdmin = JSON.parse(localStorage.getItem('ismod'));
    console.log(this.isAdmin);
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAll().subscribe(response => {
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

  editmovie( movieid: number ){
    for (let movie of this.movies$){
      if (movie.movie_id === movieid){
        this.storage.setItem(movie);
        console.log(movie);
      }
    }
    this.route.navigateByUrl('/movies/edit');
  }

  goToReviews( movie: any ){
    this.storage.setItem(movie);
    this.route.navigate(['/movies', movie.movie_id]);
  }
}
