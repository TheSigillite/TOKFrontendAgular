import { Component, OnInit } from '@angular/core';
import {UserhttpService} from '../../services/userhttp.service';

@Component({
  selector: 'app-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.css']
})
export class UserbarComponent implements OnInit {
   login: string;
   passwd: string;
   isAdmin: any;
   youexist: string;
  constructor(private userhttp: UserhttpService) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('movieslogin');
    this.passwd = localStorage.getItem('moviespass');
    this.isAdmin = JSON.parse(localStorage.getItem('ismod'));
    if (this.login !== undefined){
      this.youexist = 'Logged in as ' + this.login;
    }
  }

  onSubmit(){
    this.userhttp.login({login: this.login, passwd: this.passwd}).subscribe(response => {
      console.log(response);
      this.isAdmin = response;
      if (this.isAdmin !== undefined){
        this.youexist = 'Logged in as ' + this.login;
        localStorage.setItem('movieslogin', this.login);
        localStorage.setItem('moviespass', this.passwd);
        localStorage.setItem('ismod' , JSON.stringify(this.isAdmin));
        window.location.reload();
      }
      else {
        this.youexist = 'Wrong username or password';
      }
    });
  }

}
