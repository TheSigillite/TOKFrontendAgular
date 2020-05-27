import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { AddMovie } from '../interfaces/add-movie';
import { EditMovie } from '../interfaces/edit-movie';
import { DeleteMovie } from '../interfaces/delete-movie';
import { Movie } from '../interfaces/movie';
import { ResponseDTO } from '../interfaces/responsedto';

@Injectable()
export class MovieserviceService {
  private url = 'https://pwsztokserver.herokuapp.com/movies';
  private deleteurl = 'https://pwsztokserver.herokuapp.com/movies/delete'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Movie[]>(this.url + '/all');
  }
  addMovie(newmovie: AddMovie){
    return this.http.post<ResponseDTO>(this.url + '/new', newmovie);
  }

  editMovie(editmovie: EditMovie){
    return this.http.put<ResponseDTO>(this.url + '/update', editmovie);
  }

  deleteMovie(deleteLoad: DeleteMovie){
    return this.http.request<ResponseDTO>('delete', this.deleteurl , { body: deleteLoad });
  }
}
