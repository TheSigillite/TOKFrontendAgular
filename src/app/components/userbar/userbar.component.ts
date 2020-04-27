import { Component, OnInit } from '@angular/core';
import {UserhttpService} from '../../services/userhttp.service';
import { Router } from '@angular/router';

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
  constructor(private userhttp: UserhttpService, private router: Router) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('movieslogin');
    this.passwd = localStorage.getItem('moviespass');
    try{
      this.isAdmin = JSON.parse(localStorage.getItem('ismod'));
    }
    catch (e) {
      this.isAdmin.admin = undefined;
      this.youexist = 'You are not logged in';
    }
    if (this.login !== null && this.login !== undefined){
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
    }, error => {
      const err: any = error;
      if(err.status === 404){
        window.alert('Wrong password or username');
      } else {
        window.alert('Unexpected error. Contact modera')
      }
      this.youexist = err.details;
    });
  }

  logout(){
    localStorage.removeItem('movieslogin');
    localStorage.removeItem('moviespass');
    localStorage.removeItem('ismod');
    window.location.reload();
  }

  register(){

  }

  goToNewMovie(){
    this.router.navigateByUrl('/movies/new');
  }

}
