import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';
import {Userclass} from '../userclass';
import {Newmod} from '../interfaces/newmod';

@Injectable()
export class UserhttpService {
  url = 'http://localhost:8080/users';
  constructor(private http2: HttpClient) {}

  login(user: User){
    const tosend = new Userclass(user.login, user.passwd);
    console.log('sedning ' + JSON.stringify(tosend));
    return this.http2.post<any>(this.url + '/login', user);
  }

  register(newuser: User){
    return this.http2.post<any>(this.url + '/register', newuser);
  }

  newModerator(newmod: Newmod){
    return this.http2.put<any>( this.url + '/moderation', newmod);
  }
}
