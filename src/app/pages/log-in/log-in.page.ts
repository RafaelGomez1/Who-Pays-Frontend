import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/UserLogin';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  userLogin: UserLogin;

  constructor() {
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
  }

  onSubmitCredentials() {
  }
}
