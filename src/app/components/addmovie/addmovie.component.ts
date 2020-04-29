import { Component, OnInit } from '@angular/core';
import {MovieserviceService} from '../../services/movieservice.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  title: string;
  cover: string;
  director: string;
  premiere: number;
  status: string;
  constructor(private movieser: MovieserviceService) { }

  ngOnInit(): void {
  }

  movieAdd(){
    console.log({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      title: this.title,
      cover: this.cover,
      director: this.director,
      premiere: this.premiere
    });
    this.movieser.addMovie({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      title: this.title,
      cover: this.cover,
      director: this.director,
      premiere: this.premiere
    }).subscribe(response =>{
      console.log(response);
      this.status = response.details;
    }, error => {
      let err: any = error;
      console.log(err);
      this.status = err.details;
    });
  }

}
