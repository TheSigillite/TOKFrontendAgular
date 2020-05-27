import { Component, OnInit } from '@angular/core';
import {StorageserviceService} from '../../services/storageservice.service';
import { MovieserviceService } from '../../services/movieservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {
  movie: any;
  constructor(private store: StorageserviceService, private movieservice: MovieserviceService, private rt: Router) { }


  ngOnInit(): void {
    this.movie = this.store.getItem();
    this.store.setItem(undefined);
  }

  sendEdit(){
    this.movieservice.editMovie({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      movie_id: this.movie.movie_id,
      title: this.movie.title,
      cover: this.movie.cover,
      director: this.movie.director,
      premiere: this.movie.premiere
    }).subscribe(response =>{
      console.log(response.details);
      alert(response.details);
      this.rt.navigateByUrl('/movies')
    },error => {
      alert(error.error.details)
    });
  }

}
