import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReviewserviceService {
  url = 'http://localhost:8080/reviews';
  constructor(private httpclient: HttpClient) { }

  getreviews(movieid: number){
    return this.httpclient.get<any>(this.url + '/get?movieid=' + movieid);
  }

  newreview(review: any){
    return this.httpclient.post<any>(this.url + '/new', review);
  }

  deletereview(todelete: any){
    return this.httpclient.request<any>('delete', this.url + '/delete', { body: todelete});
  }
}
