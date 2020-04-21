import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieserviceService {
  private url = 'http://localhost:8080/movies';
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url + '/all');
  }
  addMovie(newmovie: any){
    return this.http.post(this.url + '/new', newmovie);
  }

  editMovie(editmovie: any){
    return this.http.put(this.url + '/update', editmovie);
  }
}
