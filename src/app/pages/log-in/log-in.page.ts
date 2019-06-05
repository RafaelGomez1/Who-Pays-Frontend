import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  userLogin: UserLogin;

  constructor(private authenticationService: AuthenticationService,
              private  router: Router,
              private navController: NavController) {
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
  }

  onSubmitCredentials() {
      this.authenticationService.checkUserLogin(this.userLogin).subscribe(loginRs => {
          if (loginRs) {
              this.router.navigateByUrl('/tabs');
          } else {
              // error toast
          }
      });
  }
}
