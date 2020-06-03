import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReviewserviceService} from '../../services/reviewservice.service';
import {StorageserviceService} from '../../services/storageservice.service';

@Component({
  selector: 'app-moviereviews',
  templateUrl: './moviereviews.component.html',
  styleUrls: ['./moviereviews.component.css']
})
export class MoviereviewsComponent implements OnInit {
  reviewdmovie: any;
  reviews: any;
  rev: string;
  isadm: any;
  login: string;
  constructor(private aroute: ActivatedRoute, private rservice: ReviewserviceService, private sservice: StorageserviceService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.reviewdmovie = JSON.parse(localStorage.getItem('movie'));
    try{
      this.login = localStorage.getItem('movieslogin');
      this.isadm = JSON.parse(localStorage.getItem('ismod'));
    }catch (e) {
      if (e instanceof TypeError){
        this.isadm = undefined;
        this.login = undefined;
      }
    }

    this.rservice.getreviews(this.reviewdmovie.movie_id).subscribe(response => {
      this.reviews = response;
      console.log(this.reviews);
    }, error => alert(error.error.details));
  }

  submitNewReview(){
    this.rservice.newreview({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      movie_id: this.reviewdmovie.movie_id,
      rev: this.rev
    }).subscribe(response => {
      window.alert(response.details);
    }, error => {
      let err: any = error;
      window.alert(err.error.details);
    });
  }

  deleteReview(revi: string){
    this.rservice.deletereview({
      login: localStorage.getItem('movieslogin'),
      passwd: localStorage.getItem('moviespass'),
      movie_id: this.reviewdmovie.movie_id,
      rev: revi
    }).subscribe(response =>{
      let r: any = response;
      window.alert(response.details);
      window.location.reload();
    }, error => {
      let er: any = error;
      window.alert(er.error.details);
    });
  }
}
