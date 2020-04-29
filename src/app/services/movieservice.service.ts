import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class MovieserviceService {
  private url = 'http://localhost:8080/movies';
  private deleteurl = 'http://localhost:8080/movies/delete'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(this.url + '/all');
  }
  addMovie(newmovie: any){
    return this.http.post<any>(this.url + '/new', newmovie);
  }

  editMovie(editmovie: any){
    return this.http.put<any>(this.url + '/update', editmovie);
  }

  deleteMovie(deleteLoad: any){
    return this.http.request<any>('delete', this.deleteurl , { body: deleteLoad });
  }
}
