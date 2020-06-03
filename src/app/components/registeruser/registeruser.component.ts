import { Component, OnInit } from '@angular/core';
import {UserhttpService} from '../../services/userhttp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  login: string;
  passwd: string;
  reperatpasswd: string;

  constructor(private userser: UserhttpService, private routerOutlet: Router) { }

  ngOnInit(): void {
  }

  sendRegister(){
    this.userser.register({login: this.login, passwd: this.passwd}).subscribe( response => {
      window.alert(response.details);
      this.routerOutlet.navigateByUrl('/movies');
    }, error => {
      window.alert(error.error.details);
    });
  }

}
