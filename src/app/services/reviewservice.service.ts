import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Review} from '../interfaces/review';
import { NewReview } from '../interfaces/new-review';
import { ResponseDTO } from '../interfaces/responsedto';
import { DeleteReview } from '../interfaces/delete-review';

@Injectable()
export class ReviewserviceService {
  url = 'https://pwsztokserver.herokuapp.com/reviews';
  constructor(private httpclient: HttpClient) { }

  getreviews(movieid: number){
    return this.httpclient.get<Review[]>(this.url + '/get?movieid=' + movieid);
  }

  newreview(review: NewReview){
    return this.httpclient.post<ResponseDTO>(this.url + '/new', review);
  }

  deletereview(todelete: DeleteReview){
    return this.httpclient.request<ResponseDTO>('delete', this.url + '/delete', { body: todelete});
  }
}
