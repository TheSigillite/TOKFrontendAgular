import { Component, OnInit } from '@angular/core';
import {StorageserviceService} from '../../services/storageservice.service';
import { MovieserviceService } from '../../services/movieservice.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
  movie: any;
  constructor(private store: StorageserviceService, private movieservice: MovieserviceService) { }


  ngOnInit(): void {
    this.movie = this.store.getItem();
    this.store.setItem(undefined);
  }

  sendEdit(){
    console.log({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      movie_id: this.movie.movie_id,
      title: this.movie.title,
      cover: this.movie.cover,
      director: this.movie.director,
      premiere: this.movie.premiere
    });
    this.movieservice.editMovie({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      movie_id: this.movie.movie_id,
      title: this.movie.title,
      cover: this.movie.cover,
      director: this.movie.director,
      premiere: this.movie.premiere
    }).subscribe(response =>{
      let r: any = response;
      console.log(response.res);
    });
  }

}
