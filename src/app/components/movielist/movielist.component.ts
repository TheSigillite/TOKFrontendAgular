import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  public movies$: any;
  constructor(private movieService: MovieserviceService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.movieService.getAll().subscribe(response =>{
      this.movies$ = response;
    });
  }
}
