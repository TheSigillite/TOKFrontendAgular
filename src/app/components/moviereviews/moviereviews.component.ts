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
  movieid: number;
  constructor(private aroute: ActivatedRoute, private rservice: ReviewserviceService, private sservice: StorageserviceService) { }

  ngOnInit(): void {
    // TODO: there is a bug during reloading. Switch to localstorage?
    this.aroute.params.subscribe(param => {
      this.movieid = param.id;
    });
    this.reviewdmovie = this.sservice.getItem();
    this.rservice.getreviews(this.movieid).subscribe(response => {
      this.reviews = response;
      console.log(this.reviews);
    }, error => console.log(error));
  }

}
