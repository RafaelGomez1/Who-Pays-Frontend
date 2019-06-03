import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  userLogin: UserLogin;

  constructor(private authenticationService: AuthenticationService,
              private  router: Router) {
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
  }

  onSubmitCredentials() {

      this.router.navigateByUrl('/tabs');

     /* this.authenticationService.checkUserLogin(this.userLogin).subscribe(loginRs => {
              if (loginRs.valid) {
                 this.router.navigateByUrl('/tabs');
              }
      });*/
  }
}
